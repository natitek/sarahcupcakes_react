import Checkout from './pages/Checkout';
import About from './pages/About';
import Login from './pages/Login';
import Custom from './pages/Custom';

import { BrowserRouter as  Routes, Route } from 'react-router-dom';


function App() {
    return(
<Routes>
<Route path="/About" element={<About />} />
<Route path="/Checkout" element={<Checkout />} />
<Route path="/Custom" element={<Custom />} />
<Route path="/Login" element={<Login />} />
</Routes>
    )
}
export default App