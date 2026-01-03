import { Link } from "react-router-dom";

export default function ResturantCard({date,isAdmin,onDelet}){
    return(
        <div style={{border:"1px solid gray",padding:"10px",margin:"10px"}}>
            <img src={data.image}
            alt={data.resturantName} width="200"/>
            <h3>{data.resturantName}</h3>
            <p>{data.address}</p>
            <p>Type:{data.type}</p>
            <p>Parking:{data.parkingLot ? "Yes" :"No"}</p>
            {isAdmin &&(
                <>
                <Link to={`/admin/restayrants/update/${data.resturantId}`}>
                <button>Update</button>
                </Link>
                <button onClick={()=>ondeviceorientationabsolute(data.resturantId)}>Delete</button>
                </>
            )}
        </div>
    )
}