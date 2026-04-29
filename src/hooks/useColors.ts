import { FieldColorModeId, FieldConfigSource, getFieldColorMode } from '@grafana/data';
import { useTheme2 } from '@grafana/ui';
import { useMemo } from 'react';

/**
 * Get Colors
 * @param fieldConfig
 */
export const useColors = (fieldConfig?: FieldConfigSource) => {
  const theme = useTheme2();
  const color = fieldConfig?.defaults.color;

  return useMemo(() => {
    let colors = theme.visualization.palette;
    if (color) {
      const mode = getFieldColorMode(color.mode);
      if (mode && mode.getColors) {
        colors = mode.getColors(theme);
      } else if (color.mode === FieldColorModeId.Fixed && color.fixedColor) {
        colors = [color.fixedColor];
      }
    }
    return colors;
  }, [color, theme]);
};
