import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as  BrowserRouter} from 'react-router-dom';



import App from './App.tsx'
import Header from './Header.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
  <Header itemCount={2} />
  <App />
</BrowserRouter>
 
  
  </StrictMode>,
)
