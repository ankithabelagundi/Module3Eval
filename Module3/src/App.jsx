import { Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import CustomerRoute from "./routes/CustomerRoute";
import CustomerDashboard from "./pages/CustomerDashboard";





function App(){
return(
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/admin/dashboard" element={
      <PrivateRoute>
        <AdminRoute>
          <AdminDashboard/>
        </AdminRoute>
      </PrivateRoute>
    }/>
    <Route path="/admin/resturants/update/:id" element={
      <PrivateRoute>
        <AdminRoute>
          <UpdateRestaurant/>
        </AdminRoute>
      </PrivateRoute>
    }/>
    <Route path="/admin/dashboard" element={
      <PrivateRoute>
        <CustomerRoute>
          <CustomerDashboard/>
        </CustomerRoute>
      </PrivateRoute>
    }/>
  </Routes>
)
}
export default App;