import { Button, Link, Text } from '@/components/styled';
import logo from '@/assets/logo.svg';
import { useState } from 'react';
import { useColorModeContext } from '@/contexts';
import { useTranslation } from 'react-i18next';

export function App() {
  const [count, setCount] = useState(0);

  const { colorMode, toggleColorMode } = useColorModeContext();

  const { t, i18n } = useTranslation();

  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col content-center items-center bg-white text-sm text-white dark:bg-slate-800">
        <img src={logo} className="h-96" alt="logo" />
        <Text>{t('Hello world !')}</Text>
        <Button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </Button>
        <Button type="button" onClick={toggleColorMode}>
          Toggle color mode : {colorMode}
        </Button>
        <Button type="button" onClick={() => i18n.changeLanguage('en')}>
          EN
        </Button>
        <Button type="button" onClick={() => i18n.changeLanguage('fr')}>
          FR
        </Button>
        <Text>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </Text>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Link>
        <Link href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </Link>
      </header>
    </div>
  );
}
