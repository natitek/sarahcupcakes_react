 

import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

function App(){
  
    return(
    <>
       <Header itemCount={3}/>
       <AppRoutes />
     
       </>
        
    );
    
}

export default App;