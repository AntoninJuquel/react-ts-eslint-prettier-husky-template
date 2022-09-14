import React, { useDebugValue } from 'react';
import { Theme } from 'types/Theme';

import { useLocalStorage } from './useLocalStorage';

export const useTheme = () => {
  const [localColorMode, setLocalColorMode] = useLocalStorage(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const value: Theme = React.useMemo(() => {
    const dark = 'dark';
    const light = 'light';

    const htmlTag = window.document.documentElement;

    htmlTag.setAttribute('data-theme', localColorMode);

    const bodyClassList = window.document.documentElement.classList;
    localColorMode === dark ? bodyClassList.add(dark) : bodyClassList.remove(dark);

    return {
      theme: localColorMode,
      toggleDarkMode: () => {
        setLocalColorMode((prevMode) => (prevMode === dark ? light : dark));
      },
      setTheme: (theme: string) => {
        setLocalColorMode(theme);
      }
    };
  }, [localColorMode, setLocalColorMode]);

  useDebugValue(value);

  return value;
};
