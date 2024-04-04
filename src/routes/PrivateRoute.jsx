import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user,loading} = useContext(AuthContext);
    const loacation = useLocation();
    console.log(loacation);
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
if(user){
    return children;
}
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;