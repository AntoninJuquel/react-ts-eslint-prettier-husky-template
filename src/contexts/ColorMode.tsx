import React from 'react';
import { useLocalStorage } from '~/hooks/useLocalStorage';

interface ColorModeProps {
  children: React.ReactNode;
}

export type IColorMode = {
  colorMode?: 'light' | 'dark';
  toggleColorMode?: () => void;
};

export const ColorModeContext = React.createContext<IColorMode>({});

export function ColorModeProvider({ children }: ColorModeProps): JSX.Element {
  const [localColorMode, setLocalColorMode] = useLocalStorage(
    'prefers-color-scheme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  );

  const value: IColorMode = React.useMemo(() => {
    const dark = 'dark';
    const bodyClassList = window.document.body.classList;
    localColorMode === dark ? bodyClassList.add(dark) : bodyClassList.remove(dark);

    return {
      colorMode: localColorMode as 'light' | 'dark',
      toggleColorMode: () => {
        setLocalColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    };
  }, [localColorMode, setLocalColorMode]);

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}
