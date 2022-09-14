import { useTheme } from '@/hooks/useTheme';
import React, { createContext, useContext } from 'react';
import { Theme } from 'types/Theme';

interface ColorModeContextProps {
  children: React.ReactNode;
}

const ColorModeContext = createContext<Theme>({
  theme: '',
  toggleDarkMode: console.log,
  setTheme: console.log
});

export const useColorModeContext = () => useContext(ColorModeContext) as Theme;

export function ColorModeProvider({ children }: ColorModeContextProps): JSX.Element {
  const colorMode = useTheme();

  return <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>;
}
