import { createContext } from "react";


export const CurrencyContext = createContext();   //it creates context object this will hepls us to maintain global state

//whereever you want to use this global data context we are going to wrap all those context indside <currencyContext.provider >
// everywhere indide Home component currency value is available

//whereever you try use this context you can pass value prop here which takes obj inside we can pass whatever we want