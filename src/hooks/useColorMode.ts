import React, { useDebugValue } from 'react';
import { ColorMode } from 'types/ColorMode';

import { useLocalStorage } from './useLocalStorage';

export const useColorMode = () => {
  const [localColorMode, setLocalColorMode] = useLocalStorage(
    'prefers-color-scheme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const value: ColorMode = React.useMemo(() => {
    const dark = 'dark';
    const bodyClassList = window.document.body.classList;
    localColorMode === dark ? bodyClassList.add(dark) : bodyClassList.remove(dark);

    return {
      colorMode: localColorMode as 'light' | 'dark',
      toggleColorMode: () => {
        setLocalColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    };
  }, [localColorMode, setLocalColorMode]);

  useDebugValue(value);

  return value;
};
