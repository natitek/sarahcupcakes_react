import {useState} from "react";

import '../components/custom.css';

const Custom = () => {
  const [base, setBase] = useState('vanilla');
  const [frosting, setFrosting] = useState('pink');
  const [decoration, setDecoration] = useState('sprinkles');

  
    return (
      
      
      
          <div className="customize-page">
      <h2>Customize Your Cupcake</h2>

      <div className="cupcake-preview">
        <img src={`/assets/cupcakes/base-${base}.png`} alt="Cupcake base" />
        <img src={`/assets/cupcakes/frosting-${frosting}.png`} alt="Frosting" />
        <img src={`/assets/cupcakes/decoration-${decoration}.png`} alt="Decoration" />
      </div>

      <div className="options">
        <div>
          <label>Base:</label>
          <select value={base} onChange={(e) => setBase(e.target.value)}>
            <option value="vanilla">Vanilla</option>
            <option value="chocolate">Chocolate</option>
          </select>
        </div>

        <div>
          <label>Frosting:</label>
          <select value={frosting} onChange={(e) => setFrosting(e.target.value)}>
            <option value="pink">Pink</option>
            <option value="white">White</option>
          </select>
        </div>

        <div>
          <label>Decoration:</label>
          <select value={decoration} onChange={(e) => setDecoration(e.target.value)}>
            <option value="sprinkles">Sprinkles</option>
            <option value="cherry">Cherry</option>
          </select>
        </div>
      </div>
    </div>
  

      

    );
  }
  

  export default Custom;