import { useTheme } from '@/hooks/useTheme';
import themes from '@/json/themes.json';
import { useEffect, useRef } from 'react';

export function App() {
  const { theme, setTheme, toggleDarkMode } = useTheme();

  const toggleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (toggleRef.current) toggleRef.current.indeterminate = theme !== 'dark' && theme !== 'light';
  }, [theme]);

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
      <div className="dropdown-right dropdown">
        <label tabIndex={0} className="btn m-1">
          Select theme
        </label>
        <ul tabIndex={0} className="dropdown-content menu rounded-box h-96 w-52 overflow-auto bg-base-100 p-2 shadow">
          {themes.map((item: string) => (
            <li key={item} className={theme === item ? 'bg-primary-focus' : ''}>
              <a onClick={() => setTheme(item)}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <article className="prose">
        <h1>Hello world</h1>
      </article>
    </div>
  );
}
