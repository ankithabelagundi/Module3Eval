import { useEffect } from "react";

export default function Navbar({
    search,
    setSearch,
    type,
    setType,
    parking,
    setParking
}){
    const inputRef= useref();
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    return(
        <div style= {{padding:"10px",borderBottom:"1px solid gray" }}>
            <input 
            ref={inputRef}
            placeholder=" Search by name or address"
            value={search} onChange={(e)=>setSearch(e.target.value)} />
            <select value={type} onChange={(e)=>setType(e.target.value)}>
                <option value="">All Items</option>
                <option value="Rajasthani">Rajasthani</option>
                <option value="Gujarathi">Gujarathi</option>
                <option value="Mughalai">Mughalai</option>
                <option value="Jain">Jain</option>
                <option value="Thali">Thali</option>
                <option value="NorthIndian">NorthIndian</option>
                <option value="SouthIndian">SouthIndaian</option>
            </select>
             <select  value={parking} onChange={(e)=>
                setParking(e.target.value)
            }>
                <option value="true">Parking</option>
                <option value="false">No Parking</option>
            </select>
        </div>
    );
}