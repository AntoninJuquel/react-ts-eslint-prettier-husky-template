import React from 'react'
import Typography from '@mui/material/Typography'

import { Paper, Button, IconButton, useTheme, InputBase, Divider } from '@mui/material'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Send from '@mui/icons-material/Send'

import { useColorMode } from 'contexts'
import { useLocalStorage } from 'hooks'

import { useTranslation } from 'react-i18next'

export function App() {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()

  const [value, setValue] = useLocalStorage('me', 'Somindras')

  const inputRef = React.useRef<HTMLInputElement>(null)

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <header>
        <Button
          color='inherit'
          onClick={toggleColorMode}
          endIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        >
          Put light {theme.palette.mode === 'dark' ? 'on' : 'off'}
        </Button>
        <Button color='inherit' onClick={() => changeLanguage('en')}>
          EN
        </Button>
        <Button color='inherit' onClick={() => changeLanguage('de')}>
          DE
        </Button>
        <Button color='inherit' onClick={() => changeLanguage('fr')}>
          FR
        </Button>

        <Typography variant='h1' textAlign='center'>
          {t('Hello world !')}
        </Typography>
      </header>
      <main>
        <Typography variant='h2' textAlign='center'>
          {value}
        </Typography>
        <div className='flex justify-center'>
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
            }}
          >
            <InputBase
              placeholder='New name'
              aria-label='New name'
              sx={{ ml: 1, flex: 1 }}
              inputRef={inputRef}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
            <IconButton
              color='primary'
              sx={{ p: '10px' }}
              aria-label='send'
              onClick={() => {
                if (!inputRef.current) return
                setValue(inputRef.current.value)
                inputRef.current.value = ''
              }}
            >
              <Send />
            </IconButton>
          </Paper>
        </div>
        <h1 className='text-center text-gray-900 dark:text-white'>
          {t('Testing')} tailwind {t(theme.palette.mode)}
        </h1>
      </main>
    </div>
  )
}
