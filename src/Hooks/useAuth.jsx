import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {

    const allInformation = useContext(AuthContext)
    return allInformation ; 
};

export default useAuth;
