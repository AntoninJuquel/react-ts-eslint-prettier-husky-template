import React, { createContext, useContext, useMemo } from 'react'
import { ThemeProvider, createTheme, useMediaQuery, CssBaseline } from '@mui/material'

interface ColorModeProps {
  children: React.ReactNode
}

interface IColorMode {
  toggleColorMode?: () => void
}

const ColorModeContext = createContext<IColorMode>({})

export function useColorMode(): IColorMode {
  return useContext(ColorModeContext) as IColorMode
}

export function ColorModeProvider({ children }: ColorModeProps): JSX.Element {
  const [mode, setMode] = React.useState<'light' | 'dark'>(
    useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light',
  )
  const value: IColorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = React.useMemo(() => {
    const dark = 'dark'
    const bodyClassList = window.document.body.classList
    mode === dark ? bodyClassList.add(dark) : bodyClassList.remove(dark)

    return createTheme({
      palette: {
        mode,
      },
    })
  }, [mode])

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
