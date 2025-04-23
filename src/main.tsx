import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import { BrowserRouter as  BrowserRouter,Routes, Route} from 'react-router-dom';


import Checkout from './pages/Checkout';
import About from './pages/About';
import Login from './pages/Login';
import Custom from './pages/Custom';

import Header from './Header.tsx'





createRoot(document.getElementById('root')!).render(

  
  <StrictMode>
    <BrowserRouter>
    
  <Header itemCount={2} />


<Routes>
<Route path="/Checkout" element={<Checkout />} />
<Route path="/About" element={<About />} />
<Route path="/Login" element={<Login />} />
<Route path="/Custom" element={<Custom />} />

</Routes>

</BrowserRouter>

  </StrictMode>,
)
