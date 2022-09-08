import { useCallback, useDebugValue, useEffect, useState } from 'react';

export function useLocalStorage(
  key: string,
  initialValue: string,
): [string, (value: string | ((storedValue: string) => string)) => void] {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: string | ((storedValue: string) => string)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    },
    [key, storedValue],
  );

  useEffect(() => {
    if (!localStorage.getItem(key)) setValue(initialValue);
  }, [initialValue, setValue, key]);

  useDebugValue(storedValue);

  return [storedValue, setValue];
}
