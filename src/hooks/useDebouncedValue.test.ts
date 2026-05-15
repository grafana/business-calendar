import { act, renderHook } from '@testing-library/react';

import { useDebouncedValue } from './useDebouncedValue';

describe('useDebouncedValue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Should return initial value immediately', () => {
    const { result } = renderHook(() => useDebouncedValue(100, 200));

    expect(result.current).toBe(100);
  });

  it('Should not update before delay elapses', () => {
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value, 200), {
      initialProps: { value: 100 },
    });

    rerender({ value: 200 });

    act(() => {
      jest.advanceTimersByTime(199);
    });

    expect(result.current).toBe(100);
  });

  it('Should update after delay elapses', () => {
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value, 200), {
      initialProps: { value: 100 },
    });

    rerender({ value: 200 });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(result.current).toBe(200);
  });

  it('Should reset timer on rapid updates', () => {
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value, 200), {
      initialProps: { value: 100 },
    });

    rerender({ value: 200 });
    act(() => { jest.advanceTimersByTime(100); });

    rerender({ value: 300 });
    act(() => { jest.advanceTimersByTime(100); });

    // Only 100ms since last update — still debouncing
    expect(result.current).toBe(100);

    act(() => { jest.advanceTimersByTime(100); });

    expect(result.current).toBe(300);
  });
});
