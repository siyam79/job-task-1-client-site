import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nabvar from "../Nabvar/Nabvar";

const MainLayout = () => {
    return (
        <div>
           <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayout;