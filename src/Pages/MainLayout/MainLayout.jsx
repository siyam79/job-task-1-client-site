import { Outlet } from "react-router-dom";
// import Nabvar from "../Nabvar/Nabvar";

const MainLayout = () => {
    return (
        <div>
           <div>
            {/* <Nabvar></Nabvar> */}
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;