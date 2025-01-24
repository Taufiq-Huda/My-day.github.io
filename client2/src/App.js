import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  localStorage.setItem("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OTQ5ZjdhOTQ0N2QxMDY5N2M5ZDJkIn0sImlhdCI6MTY4Nzc2NzU0M30.XZtV5XxVuluXyBroeUU2DL1EfHA8aD-H6m1pf2_AqCs");
  // localStorage.setItem("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YzcyZWIwZDdjYzI3ZDhmZTg2NTAwIn0sImlhdCI6MTY4Nzk3NDYzNn0.6bnYMT-N1uWwnjvFHvZMFybzPO23yS-OoMQNWRmed6w");
  return (
    <div className="w-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
