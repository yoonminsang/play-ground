import { useCallback, useState } from 'react';

/**
 * @description
 * session storage를 사용하는 훅입니다.
 *
 * @example
 * const handle정답제출 = useThrottle(() => {
 *   set퀴즈정답제출();
 *   mutate();
 * }, 200);
 */
export function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        if (typeof window !== 'undefined') {
          window.sessionStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.log(error);
      }
    },
    [key],
  );

  return [storedValue, setValue] as const;
}
