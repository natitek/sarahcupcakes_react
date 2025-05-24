 

import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App(){
  
    return(
    <>
       <Header itemCount={3}/>
       <AppRoutes />
       <Footer />
     
       </>
        
    );
    
}

export default App;