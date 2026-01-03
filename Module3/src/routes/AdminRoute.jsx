import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import{Navigate} from "react-router-dom";
export default function AdminRoute({childern}){
    const{user}=useContext(AuthContext);
    return user ?.role ==="admin" ? 
    childern: <Navigate to="/"/>
}