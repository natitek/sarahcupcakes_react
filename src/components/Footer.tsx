import './Footer.css';
import { Camera, MessageCircle, Music } from 'lucide-react';
import SarahLogo from '../assets/Sarah Logo.svg'; // Adjust if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={SarahLogo} alt="Sarah's Logo" className="footer-logo" />
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={20} /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><MessageCircle size={20} /></a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer"><Music size={20} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sarah’s Cupcakes. All rights reserved.</p>
        <div className="footer-links">
          <a href="/About">About</a>
          <a href="/Custom">Customize</a>
          <a href="/Login">Sign In</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
