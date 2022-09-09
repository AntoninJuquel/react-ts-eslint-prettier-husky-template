import { useColorMode } from '@/hooks/useColorMode';
import React, { createContext, useContext } from 'react';
import { ColorMode } from 'types/ColorMode';

interface ColorModeContextProps {
  children: React.ReactNode;
}

const ColorModeContext = createContext<ColorMode>({});

export const useColorModeContext = () => useContext(ColorModeContext) as ColorMode;

export function ColorModeProvider({ children }: ColorModeContextProps): JSX.Element {
  const colorMode = useColorMode();

  return <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>;
}
