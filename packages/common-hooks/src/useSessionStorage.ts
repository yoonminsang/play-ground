import { useCallback, useState } from 'react';

/**
 * @description window.sessionStorage를 사용하는 hook 입니다.
 *
 * @note
 * // 이 hook을 직접사용하기보다는 wrapping해서 사용하는 것을 권장합니다.
 * const useSessionUserStorage = () => {
 *   return useSessionStorage<User | null>('user',null);
 * }
 * const [user, setUser, resetUser] = useSessionUserStorage();
 */
export function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
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
      } catch (err) {
        console.log(err);
      }
    },
    [key],
  );

  const resetValue = useCallback(() => {
    setValue(initialValue);
  }, [initialValue, setValue]);

  return [storedValue, setValue, resetValue] as const;
}
