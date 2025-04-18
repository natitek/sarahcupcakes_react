import sarahlogo from './assets/Sarah Logo.svg'
import './App.css'
import signin from './assets/signin.svg'

function header(){

    return(
        <>
        
        <div className="header">
        <a href="#" target="">
          <img src={sarahlogo} className="logo" alt="sarah logo" />
        </a>

       
          <img src={signin} className="small_icon" alt="sign in" />
        
        </div>
        <hr></hr>
        </>
    )
}

export default header