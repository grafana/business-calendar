import { formattedValueToString, getLocaleData, TimeRange } from '@grafana/data';
import { TimeZone } from '@grafana/schema';
import dayjs, { OpUnitType } from 'dayjs';
import { useMemo } from 'react';

import { CalendarEvent, CalendarOptions, ColorMode } from '../types';
import { getMinutesOffsetFromTimeZone } from '../utils';
import { useEventFrames } from './useEventFrames';

/**
 * Get Calendar Events
 * @param frames
 * @param options
 * @param colors
 * @param timeRange
 * @param timeZone
 */
export const useCalendarEvents = (
  frames: ReturnType<typeof useEventFrames>,
  options: CalendarOptions,
  colors: string[],
  timeRange: TimeRange,
  timeZone: TimeZone
): CalendarEvent[] => {
  /**
   * Week Start
   *
   * Memoized with no deps — locale data is set once at app init and never
   * changes during a session.
   */
  const firstDay = useMemo(() => (getLocaleData().firstDayOfWeek() === 0 ? 'week' : 'isoWeek'), []);

  return useMemo(() => {
    /**
     * Minutes Offset from Browser Time Zone
     *
     * Computed inside the memo so it refreshes on every time range change
     * (dashboard refresh). The formatter is cached in getMinutesOffsetFromTimeZone
     * so this is cheap. Keeps the offset DST-correct without polling.
     */
    const minutesOffset = getMinutesOffsetFromTimeZone(timeZone);

    const to = dayjs(timeRange.to.valueOf()).add(minutesOffset, 'minutes');
    const endOfRangeWeek = to.endOf(firstDay as OpUnitType);

    return frames.flatMap((frame, frameIdx) => {
      const colorFn = frame.color?.display;

      if (!frame.text || !frame.start) {
        return [];
      }

      return Array.from({ length: frame.text.values.length }).map<CalendarEvent>((item, i) => {
        /**
         * Define description with correct order
         */
        const description =
          options.descriptionField
            ?.map((name) => frame.description.find((obj) => obj.name === name))
            .map((field) => field?.values[i])
            .filter((label) => label) || [];

        const idx = options.colors === ColorMode.FRAME ? frameIdx : i;
        const start = frame.start?.values[i];
        const end = frame.end?.values[i];
        const color = frame.color?.values[i];

        return {
          text: frame.text?.display
            ? (formattedValueToString(frame.text.display(frame.text?.values[i])) as string)
            : frame.text?.values[i],
          description,
          labels: frame.labels?.map((field) => field.values[i]).filter((label) => label),
          links: frame.text?.getLinks!({ valueRowIndex: i }),
          start: dayjs(start).add(minutesOffset, 'minutes'),
          color:
            (options.colors === ColorMode.THRESHOLDS && colorFn?.(color).color) ||
            colors[Math.floor(idx % colors.length)],
          end: frame.end ? (end ? dayjs(end).add(minutesOffset, 'minutes') : endOfRangeWeek) : undefined,
          location: frame.location?.values[i],
        };
      });
    });
  }, [timeRange.to, timeZone, firstDay, frames, options.descriptionField, options.colors, colors]);
};
