import { useState } from 'react';

import logo from '~/assets/react.svg';
import { useColorMode } from '~/hooks/useColorMode';
import { Button } from '~/components/styled';
import { useTranslation } from 'react-i18next';

export function App() {
  const [count, setCount] = useState(0);

  const { colorMode, toggleColorMode } = useColorMode();

  const { t, i18n } = useTranslation();

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-white dark:bg-black'>
      <img src={logo} alt='logo' />
      <h1 className='font-bold text-gray-800 dark:text-white'>{t('Hello world !')}</h1>

      <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
      <Button onClick={() => i18n.changeLanguage('de')}>DE</Button>
      <Button onClick={() => i18n.changeLanguage('fr')}>FR</Button>

      <Button onClick={toggleColorMode}>Toggle color mode : {colorMode}</Button>

      <Button type='button' onClick={() => setCount((count) => count + 1)} className='mt-5'>
        count is: {count}
      </Button>

      {count > 0 ? (
        <p className='text-gray-800 dark:text-white'>
          <code>The count is now: {count}</code>{' '}
        </p>
      ) : null}
    </div>
  );
}
