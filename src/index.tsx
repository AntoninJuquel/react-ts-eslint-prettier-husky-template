import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ColorModeProvider } from 'contexts'

import 'index.css'
import './services/i18n'

import reportWebVitals from 'reportWebVitals'

import { App } from 'views'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </ColorModeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
