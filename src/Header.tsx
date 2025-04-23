import React from 'react';
import { ShoppingCart, User} from 'lucide-react';
import './Header.css'; // Make sure to import the CSS

import { useNavigate } from 'react-router-dom';






import SarahLogo from './assets/Sarah Logo.svg'

type Props = {
  itemCount: number;
};


const Header: React.FC<Props> = ({ itemCount }) => {
 


  const navigate = useNavigate();

  return (
    
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={SarahLogo} className="sarahLogo"
         onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
         
        />
      </div>

      {/* Right-side icons */}
      <div className="icons">
        <User
          className="icon"
          onClick={() => navigate('/Login')} // Navigate to login
          style={{ cursor: 'pointer' }}
        />

        <div
          className="cart-container"
          onClick={() => navigate('/Checkout')} // Navigate to checkout
          style={{ cursor: 'pointer' }}
        >
          <ShoppingCart className="icon" />
          {itemCount > 0 && <span className="badge">{itemCount}</span>}
        </div>
      </div>
    </header>
  );
};


export default Header;
