import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider =({childern})=>{
    const[user,setUser]=useState(
        JSON.prase(localStorage.getItem("user"))||null
    );
    const login=(email,password)=>{
        if(email==="admin@gmail.com"&& password==="admin1234"){
            const data={role:"admin"};
            setUser(data);
            localStorage.setItem("user",JSON.stringify(data));
            return true;
        }
        if(email==="customer@gmail.com"&& password==="customer1234"){
            const data={role:"admin"};
            setUser(data);
            localStorage.setItem("user",JSON.stringify(data));
            return true;
        }
        alert("Invalid email or password");
        return false;

    };
    const logout=()=>{
        setUser(null);
        localStorage.removeItem("user");

    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {childern}
        </AuthContext.Provider>
    );
};