
import { Routes, Route } from 'react-router-dom'


import Checkout from '../pages/Checkout';
import About from '../pages/About';
import Login from '../pages/Login';
import Custom from '../pages/Custom';
import Home from '../pages/Home'


const AppRoutes = () => (

<Routes>
     <Route path="/Checkout" element={<Checkout />} />
     <Route path="/About" element={<About />} />
     <Route path="/Login" element={<Login />} />
    <Route path="/Custom" element={<Custom />} />
    <Route path="/" element={<Home />} />
</Routes>


)

export default AppRoutes;