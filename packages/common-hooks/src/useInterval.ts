import { useEffect, useRef } from 'react';

type TimerHandler = (...args: any[]) => void;
type Delay = number | null;

/**
 * @description
 * window.setInterval 를 쉽게 사용할 수 있는 hook 입니다.
 *
 * @example
 * // fn이 1000ms마다 실행됩니다.
 * useInterval(fn, 1000);
 *
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
