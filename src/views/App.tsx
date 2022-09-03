import React from 'react'
import Typography from '@mui/material/Typography'

import { Button, useTheme } from '@mui/material'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { useColorMode } from 'contexts'

export function App() {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()

  return (
    <div>
      <header>
        <Button
          color='inherit'
          onClick={toggleColorMode}
          endIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          className='float-right'
        >
          Put light {theme.palette.mode === 'dark' ? 'on' : 'off'}
        </Button>

        <Typography variant='h1' textAlign='center'>
          Hello world !
        </Typography>
      </header>
    </div>
  )
}
