import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStoarge";

export default function UpdateRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    const data = getRestaurants();
    const found = data.find(r => r.restaurantID == id);
    setForm(found);
  }, [id]);

  const handleUpdate = () => {
    if (!confirm("Are you sure you want to update?")) return;

    const data = getRestaurants();
    const updated = data.map(r =>
      r.restaurantID == id ? form : r
    );

    saveRestaurants(updated);
    alert("Updated successfully");
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <h2>Update Restaurant</h2>
      <input
        value={form.restaurantName || ""}
        onChange={e => setForm({ ...form, restaurantName: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
