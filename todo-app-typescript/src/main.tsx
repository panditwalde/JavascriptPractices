import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { TodosProvideer } from './store/todos.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <TodosProvideer>
      <App />
      </TodosProvideer>
    </BrowserRouter >
  </React.StrictMode>,
)
