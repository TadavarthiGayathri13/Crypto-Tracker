import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

function MainLayout() {
    return (
        <>
        <Navbar />  {/*THIS NAVBAR IS THE SHARED UI WE WANT TO ACROSS PAGES */}
        <Outlet />   {/*This is going to be actual page which will be renderd along with navbar */}
        </>
    )
}
export default MainLayout;