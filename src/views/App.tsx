import { useTheme } from '@/hooks/useTheme';
import themes from '@/json/themes.json';
import locales from '@/json/locales.json';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export function App() {
  const { theme, setTheme, toggleDarkMode } = useTheme();

  const toggleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (toggleRef.current) toggleRef.current.indeterminate = theme !== 'dark' && theme !== 'light';
  }, [theme]);

  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen w-screen overflow-hidden bg-base-200 bg-cover bg-top">
      <div className="inline-flex content-center items-center gap-1">
        <label className="label-text">🌑</label>
        <input
          id="dark-mode-toggle"
          type="checkbox"
          className="toggle"
          checked={theme === 'light'}
          onChange={toggleDarkMode}
          ref={toggleRef}
        />
        <label className="label-text">☀️</label>
      </div>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          {theme}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box max-h-96 w-52 overflow-auto bg-base-100 p-2 shadow"
        >
          {themes.map((item: string) => (
            <li key={item} className={theme === item ? 'bg-primary-focus' : ''}>
              <a onClick={() => setTheme(item)}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          <img src={`https://flagcdn.com/w20/${i18n.language}.png`} width="20" alt={i18n.language} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box max-h-96 w-16 overflow-auto bg-base-100 p-2 shadow"
        >
          {locales.map((item: string) => (
            <li key={item} className={i18n.language === item ? 'bg-primary-focus' : ''}>
              <a onClick={() => i18n.changeLanguage(item)}>
                <img src={`https://flagcdn.com/w20/${item}.png`} width="20" alt={item} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <article className="prose">
        <h1>{t('Hello world !')}</h1>
      </article>
    </div>
  );
}
