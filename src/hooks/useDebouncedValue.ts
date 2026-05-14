import { useEffect, useState } from 'react';

/**
 * Debounced Value
 *
 * Returns a value that only updates after the given delay has elapsed
 * with no further changes. Prevents rapid state churn on resize events.
 */
export const useDebouncedValue = <T>(value: T, delayMs: number): T => {
  /**
   * Debounced state
   */
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);

    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
};
