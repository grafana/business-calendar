import { AbsoluteTimeRange, EventBus, rangeUtil, TimeRange } from '@grafana/data';
import { useCallback, useMemo } from 'react';
import { CalendarOptions, TimeRangeType } from 'types';
import { getVariableValue } from 'utils';

import { useRuntimeVariables } from './useRuntimeVariables';

/**
 * Use Time Range
 */
export const useTimeRange = ({
  defaultTimeRange,
  defaultOnChangeTimeRange,
  options,
  eventBus,
}: {
  defaultTimeRange: TimeRange;
  defaultOnChangeTimeRange: (timeRange: AbsoluteTimeRange) => void;
  options: CalendarOptions;
  eventBus: EventBus;
}) => {
  /**
   * Runtime Variables
   */
  const { getVariable } = useRuntimeVariables(eventBus, '');
  const startTimeVariable = getVariable(options?.startTimeVariable || '');
  const endTimeVariable = getVariable(options?.endTimeVariable || '');

  const timeRange = useMemo(() => {
    /**
     * Manual
     */
    if (options.timeRangeType === TimeRangeType.MANUAL && options.endTimeRange && options.startTimeRange) {
      return rangeUtil.convertRawToRange({
        from: options.startTimeRange,
        to: options.endTimeRange,
      });
    }

    /**
     * Variable
     */
    if (options.timeRangeType === TimeRangeType.VARIABLE && startTimeVariable && endTimeVariable) {
      return rangeUtil.convertRawToRange({
        from: getVariableValue(startTimeVariable),
        to: getVariableValue(endTimeVariable),
      });
    }

    /**
     * Default
     */
    return defaultTimeRange;
  }, [
    defaultTimeRange,
    endTimeVariable,
    options.endTimeRange,
    options.startTimeRange,
    options.timeRangeType,
    startTimeVariable,
  ]);

  /**
   * On Change Time Range
   */
  const onChangeTimeRange = useCallback(
    (timeRange: AbsoluteTimeRange) => {
      /**
       * Change time range only for default
       */
      if (options.timeRangeType === TimeRangeType.DEFAULT) {
        defaultOnChangeTimeRange(timeRange);
      }
    },
    [defaultOnChangeTimeRange, options.timeRangeType]
  );

  return {
    timeRange: timeRange,
    onChangeTimeRange: onChangeTimeRange,
  };
};
