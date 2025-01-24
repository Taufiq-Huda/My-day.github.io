import "./App.css";
import NavBar from "./components/NavBar.tsx";
import { Outlet } from "react-router-dom";

function App() {
  localStorage.setItem("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OTQ5ZjdhOTQ0N2QxMDY5N2M5ZDJkIn0sImlhdCI6MTY4Nzc2NzU0M30.XZtV5XxVuluXyBroeUU2DL1EfHA8aD-H6m1pf2_AqCs");
  return (
    <div className='w-full'>
      <NavBar/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam est sint quidem ut iure, deleniti incidunt iste pariatur, voluptatem, ab praesentium eius nesciunt nisi minima soluta ducimus in sit!
      <Outlet />
    </div>
  )
}

export default App
