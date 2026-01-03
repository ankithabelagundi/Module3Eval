import { useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStoarge";
import AddRestaurantForm from "../components/AddRestaurantForm";
import ResturantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

function AdminDashboard(){
const[restaurants,setRestaurants]=useState([]);
const[search,setSearch]=useState("");
const[type,setType]=useState("");
const[parking,setParking]=useState("");
const loadData =()=>{
    setRestaurants(getRestaurants());
};
useEffect(()=>{
    loadData();
},[]);
const handleDelete =(id)=>{
    if(confirm("Are you sure you want to delete?")){
        const updated = resturants.filter(r=>r.resturantId !== id);
        saveRestaurants(updated);
        alert("Deleted sucessfully");
        loadData();
    }
};
const filtered = resturants.filter(r=>{
    return(
        (r.resturantName.tolowercase().includes(search.toLowerCase()))&&
        (type? r.type === type:true)&&
        (parking ? String(r.parkingLot)=== parking:ture)
    );
});
return(
    <>
    <Navbar
    search={search}
    setsearch={setSearch}
    type={type}
    setType={setType}
    parking={parking}
    setParking={setParking}/>
    <AddRestaurantForm refresh={loadData}/>
    {filtered.map(r =>(
        <ResturantCard
        key={r.resturantId}
        data={r}
        isAdmin={true}
        onDelete={handleDelete}/>
    ))}
    </>
);
}
export default AdminDashboard;