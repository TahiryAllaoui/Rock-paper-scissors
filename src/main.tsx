import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import '../src/style/index.css'
import ScoreProvider from './providers/ScoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>,
)
