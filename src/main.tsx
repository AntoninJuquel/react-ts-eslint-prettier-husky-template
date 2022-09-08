import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import '~/index.css';
import '~/services/i18n';

import { App } from '~/views';
import { ColorModeProvider } from './contexts/ColorMode';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </ColorModeProvider>
  </React.StrictMode>,
);
