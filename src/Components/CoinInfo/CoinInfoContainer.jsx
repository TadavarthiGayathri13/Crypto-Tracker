import { useQuery } from "react-query";
import CoinInfo from "./CoinInfo";
import { fetchCoinHistoricData } from "../../Services/FetchCoinHistoricData";
import { useState } from "react";
import PageLoader from "../../components/PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useStore from '../../state/store';
// import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";

function CoinInfoContainer({ coinId }) {

// const { historicData, isError, isLoading, currency, days, setDays, setCoinInterval } = useFetchCoinHistory(coinId);
    const {currency} = useStore();
    const [days, setDays] = useState(90);
    const[interval, setCoinInterval] = useState('');

    const {data:historicData, isLoading, isError} = useQuery(['coinHistoricData', coinId, currency,days,interval],
        ()=> fetchCoinHistoricData(coinId, interval,days,currency),{
            cacheTime: 1000 * 60 *2,
            staleTime: 1000 * 60 *2,
        });

        if(isLoading) {
            return <PageLoader />
        }
        if(isError) {
            return <Alert message="Error fetching data" type="error" />
            
        }
    
    return(
        <>
         <CoinInfo 
                historicData={historicData} 
                setDays={setDays} 
                setCoinInterval={setCoinInterval} 
                days={days}
                currency={currency}
            />
        </>
    )
}
export default CoinInfoContainer;


// Here we can use custom hook part we can separate our code part also for reusing purpose
// useFetchCoinHistory we are created another file we are uploading that into this file if you want uncomment and check or 
// compare sanketsir repo crypto project and this crypto project 