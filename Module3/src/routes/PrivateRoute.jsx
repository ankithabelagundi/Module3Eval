import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate} from "react-router-dom";
export default function PrivateRoute({childern}){
    const {user}=useContext(AuthContext);
    return user? childern: <Navigate to="/"/>;
}