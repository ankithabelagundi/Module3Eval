import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export default function CustomerRoute({childern}){
    const{user}= useContext(AuthContext);
    return user ?.role==="customer" ?
    childern:<Navigate to="/"/>
}