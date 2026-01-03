import { useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStoarge";

export default function AddRestaurantForm({refresh}){
    const[form,setForm]=useState({
        restaurantId:"",
        restaurantName:"",
        address:"",
        type:"",
        parkingLot:"",
        image:""
        
    });
    const handleAdd=()=>{
        if(!form.restaurantName||form.address){
            alert("Form cannot be empty");
            return;
        }
        const data=getRestaurants();
        const newRestaurant = {
            ...form,
            restaurantId:Date.now(),
            parkingLot:form.parkingLot==="true"
        };
        saveRestaurants([...data,newRestaurant]);
        alert("Resturant added sucessfully ");
        setForm({});
        refresh();
    };
    return(
        <div>
            <input  placeholder="Name" onChange={e=>setForm({...form,restaurantName:e.target.value})} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}