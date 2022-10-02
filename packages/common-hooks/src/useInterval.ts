import { useEffect, useRef } from 'react';

type TimerHandler = (...args: any[]) => void;
type Delay = number | null;

/**
 * @param callback - Function that will be called every `delay` ms.
 * @param delay - Number representing the delay in ms. Set to `null` to "pause" the interval.
 */

export function useInterval(callback: TimerHandler, delay: Delay) {
  const savedCallbackRef = useRef<TimerHandler>();

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args: any[]) => savedCallbackRef.current?.(...args);

    if (delay !== null) {
      const intervalId = setInterval(handler, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}
