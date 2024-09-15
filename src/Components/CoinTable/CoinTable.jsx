import {  useState } from "react";
// import { useContext, useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "react-query";
// import { CurrencyContext } from "../../context/CurrencyContext";
import currencyStore from '../../state/store';
import { useNavigate } from "react-router-dom";
// import PageLoader from "../PageLoader/PageLoader";
import PageLoader from "../../components/PageLoader/PageLoader";


function CoinTable() {

  // const {currency} = useContext(CurrencyContext);
  const {currency} = currencyStore();

  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery(
    ['coins', page, currency],
    () => fetchCoinData(page, currency),
    {
      // retry: 2,
      // retryDelay: 1000,
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 *2,
    }
  );
  function handleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-green-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                {/* Header of the table */}
                <div className="basis-[35%]">
                    Coin 
                </div>
                <div  className="basis-[25%]">
                    Price 
                </div>
                <div  className="basis-[20%]">
                    24h change 
                </div>
                <div  className="basis-[20%]">
                    Market Cap
                </div>
            </div> 

             <div className="flex flex-col w-[80vw] mx-auto">
              {isLoading && <div>Loading...</div>}
              {data && data.map((coin) =>{
                return(
                   <div onClick={()=> handleCoinRedirect(coin.id)}key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2  font-semibold items-center justify-between cursor-pointer">
                    <div className="flex  items-center justify-start  gap-3 basis-[35%]">
                    
                      <div className="w-[5rem] h-[5rem]">
                        <img src = {coin.image} className="w-full h-full" loading="lazy" />
                        </div>
                        <div className="flex flex-col">
                          <div className="text-2xl"> {coin.name}</div>
                          <div className="text-xl"> {coin.symbol} </div>
                           </div>
                     </div>

                     <div className="basis-[25%]">
                         {coin.high_24h}
                      </div>
                      <div className="basis-[20%]">
                         {coin.price_change_24h}
                      </div>
                      <div className="basis-[20%]">
                         {coin.market_cap}
                      </div>
                     </div>
                
                );
              })}

              </div>    
              <div  className="flex gap-4 justify-center items-center">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70 transition duration-300 ease-in-out transform hover:scale-105"
               >
              Prev
              </button>
               <button
               onClick={() => setPage(page + 1)}
               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
               Next
             </button>

              </div>
            </div>

    </>
  );
}

export default CoinTable;
