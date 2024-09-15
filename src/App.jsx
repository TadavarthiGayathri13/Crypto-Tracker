
// import { useState } from "react";

// import { CurrencyContext } from "./context/CurrencyContext";

import Routing from "./Components/Routing/Routing";
import Home from "./Pages/Home";

function App() {

  // const [currency, setCurrency] = useState('usd')
  return(
   <>
   {/*<CurrencyContext.Provider value={ { currency, setCurrency} }>   When we put home inside currencyprovide Home is accessible anywhere in the Home component */}
   
    <Routing />
   {/* </CurrencyContext.Provider> */}
   </>
  )
}
export default App;