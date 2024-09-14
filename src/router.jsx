import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PartyDetails from "./components/PartyDetails";
import CompanyDetails from "./components/CompanyDetails";

const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/partydetails",
        element:<PartyDetails/>
    },
    {
        path:"/companydetails",
        element:<CompanyDetails/>
    },
    

])
export default router