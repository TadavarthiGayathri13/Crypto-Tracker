import { Route, Routes } from "react-router-dom";
// import Home from "../../Pages/Home";
// import CoinDetailsPage from "../../Pages/CoinDetailsPage";
import { lazy, Suspense } from "react";
import MainLayout from "../../Pages/Layout";
// import PageLoader from "../PageLoader/PageLoader";
import PageLoader from "../../components/PageLoader/PageLoader";
import CustomErrorBoundaryUI from "../CustomErrorBoundary/CustomErrorBoundary";

const Home = lazy(() =>import ('../../Pages/Home'));
const CoinDetailsPage = lazy(()=> import('../../Pages/CoinDetailsPage'))

function Routing() {
  return (
    <CustomErrorBoundaryUI>
    <Routes>
  
      <Route path="/" element={<MainLayout />}>
     
        <Route index element={
        //   <Suspense fallback={<div>Loading home..</div>}>  below PageLoader and this one both are same but PageLoader will show some attractive UI while downloading
      <Suspense fallback={<PageLoader />}>
            <Home /> 
            </Suspense>
            }/>                        {/*here index means resuing the path="/" here */}
        
      
        <Route path="details/:coinId" element= {

            // <Suspense fallback ={<div>Loading CoinDetailsPage...</div>}>
            <Suspense fallback={<PageLoader />}>
            <CoinDetailsPage />
            </Suspense>

            }/>
        {/* "details" is a constant part of the path, and ":coinId" is a dynamic segment */}
      </Route>
    </Routes>
    </CustomErrorBoundaryUI>
  );
}

export default Routing;
{/*if you want to fetch what value{ coinId} passed in URL you can use Params*/}
