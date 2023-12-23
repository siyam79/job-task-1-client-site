
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../Hooks/useAuth";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()

    const location = useLocation()
    console.log(location.pathname);

    if (!loading) {
        return <div className="text-center mt-10 ">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};
PrivateRoute.propTypes = {
    children: PropTypes
}

export default PrivateRoute;