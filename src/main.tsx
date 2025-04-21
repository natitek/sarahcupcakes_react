import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route , RouterProvider, BrowserRouter} from 'react-router-dom';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Login from './pages/Login';
import Custom from './pages/Custom';



// import App from './App.tsx'
import Header from './Header.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
  <Header itemCount={2} />
  <Routes>
    <Route path="/About" element={<About />} />
    <Route path="/Checkout" element={<Checkout />} />
    <Route path="/Custom" element={<Custom />} />
    <Route path="/Login" element={<Login />} />
  </Routes>
</BrowserRouter>
 
    {/* <App /> */}
  </StrictMode>,
)
