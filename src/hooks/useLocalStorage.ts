import { useDebugValue, useEffect, useState } from 'react'

export function useLocalStorage(
  key: string,
  initialValue: string,
): [string, (value: string | ((storedValue: string) => string)) => void] {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  function setValue(value: string | ((storedValue: string) => string)) {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!localStorage.getItem(key)) setValue(initialValue)
  }, [initialValue])

  useDebugValue(storedValue)

  return [storedValue, setValue]
}
