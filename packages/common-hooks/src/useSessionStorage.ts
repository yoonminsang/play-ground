import { useCallback, useState } from 'react';

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
