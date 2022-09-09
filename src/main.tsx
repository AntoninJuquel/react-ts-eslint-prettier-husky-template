import { App } from '@/views';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeProvider } from './contexts';
import './index.css';
import '@/services/i18n';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </ColorModeProvider>
  </React.StrictMode>
);
