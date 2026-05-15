import { InternalTimeZones } from '@grafana/data';
import { TimeZone } from '@grafana/schema';
import dayjs from 'dayjs';
import { Event, stringOrDate } from 'react-big-calendar';

import { CalendarEvent, EventField } from '../types';

/**
 * Intl.DateTimeFormat Cache
 *
 * toLocaleString() creates a new Intl.DateTimeFormat on every call — an expensive
 * allocation. Cache one formatter per timezone string for the app lifetime.
 */
const tzFormatterCache = new Map<string, Intl.DateTimeFormat>();

/**
 * Get Time Zone Formatter
 * @param timeZone
 */
const getTzFormatter = (timeZone: string): Intl.DateTimeFormat => {
  if (!tzFormatterCache.has(timeZone)) {
    tzFormatterCache.set(
      timeZone,
      new Intl.DateTimeFormat(undefined, {
        timeZone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      })
    );
  }

  return tzFormatterCache.get(timeZone)!;
};

/**
 * Get Minutes Offset From Time Zone
 * @param timeZone
 */
export const getMinutesOffsetFromTimeZone = (timeZone: TimeZone) => {
  if (timeZone === InternalTimeZones.localBrowserTime) {
    /**
     * Offset is not needed, dates are in browser time zone
     */
    return 0;
  }

  /**
   * Calculate offset to show date in dashboard time zone for user
   */
  if (timeZone === InternalTimeZones.utc) {
    /**
     * UTC offset from browser date
     */
    return new Date().getTimezoneOffset();
  }

  const now = new Date();

  /**
   * Reset milliseconds to prevent losing 1 minute in difference
   */
  now.setMilliseconds(0);

  /**
   * Extract date/time parts as rendered in the target timezone.
   * Using formatToParts avoids locale-specific string parsing entirely.
   */
  const parts = getTzFormatter(timeZone).formatToParts(now);
  const get = (type: string) => parseInt(parts.find((p) => p.type === type)?.value ?? '0', 10);

  /**
   * Reconstruct the date from parts in local (browser) time to diff against now.
   * % 24 handles the edge case where hour12:false returns 24 for midnight.
   */
  const tzDate = new Date(get('year'), get('month') - 1, get('day'), get('hour') % 24, get('minute'), get('second'));

  return Math.round((tzDate.getTime() - now.getTime()) / 60000);
};

/**
 * Get Date With Minutes Offset
 * @param date
 * @param minutesOffset
 */
export const getDateWithMinutesOffset = (date: Date, minutesOffset: number): Date => {
  return dayjs(date).add(minutesOffset, 'minutes').toDate();
};

/**
 * Is Field Visible
 * @param field
 * @param fields
 */
export const isFieldVisible = (field: EventField, fields: EventField[]): boolean => {
  return fields.includes(field);
};

/**
 * Display time
 * @param event
 */
export const displayTime = (event: CalendarEvent) => {
  return event.end
    ? `${event.start.format('LLL')} - ${
        event.start.startOf('day').isSame(event.end?.startOf('day')) ? event.end.format('LT') : event.end.format('LLL')
      }`
    : `${event.start.format('LLL')}`;
};

/**
 * Return CalendarEvent type
 * @param event
 */
export const returnCalendarEvent = (event: Event) => ({
  text: event.title as string,
  start: dayjs(event.start),
  end: event.end && !event.resource?.noEndTime ? dayjs(event.end) : undefined,
  labels: [],
  ...(event.resource || {}),
});

/**
 * Divides events that cross midnight into two if they are shorter than one day and do not have to be all-day events
 */
export const splitOvernightEvents = (events: CalendarEvent[]): CalendarEvent[] => {
  const result: CalendarEvent[] = [];

  events.forEach((event) => {
    const { start, end } = event;

    if (!end || start.isSame(end, 'day')) {
      result.push(event);
      /**
       * Regular event do not cross midnight
       */
      return;
    }

    const durationInHours = end.diff(start, 'hour', true);
    const crossesMidnight = !start.isSame(end, 'day') && durationInHours < 24;

    if (crossesMidnight) {
      const endOfFirstDay = start.endOf('day');
      const startOfSecondDay = end.startOf('day');

      result.push({
        ...event,
        end: endOfFirstDay,
        text: `${event.text}`,
      });

      result.push({
        ...event,
        start: startOfSecondDay,
        end,
        text: `${event.text}`,
      });
    } else {
      /**
       * Current multi day event
       */
      result.push(event);
    }
  });

  return result;
};

/**
 * Filter Events By Year
 * @param events
 * @param date
 */
export const filterEventsByYear = (events: Event[] | undefined, date?: stringOrDate): Event[] => {
  if (!date || !events) {
    return [];
  }

  const targetYear = dayjs(date).year();

  return events.filter((event) => {
    const startYear = event.start ? dayjs(event.start).year() : null;
    const endYear = event.end ? dayjs(event.end).year() : null;

    return startYear === targetYear || endYear === targetYear;
  });
};
