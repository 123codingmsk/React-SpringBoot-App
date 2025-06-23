import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import EditEmployee from "./pages/EditEmployee.jsx";
import GetEmployee from "./pages/GetEmployee.jsx";
import GetAllEmployees from "./pages/GetAllEmployees.jsx";
import DeleteEmployee from "./pages/DeleteEmployee.jsx";

function App() {
  return (
      <>
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/employee/add" element={<AddEmployee/>}/>
              <Route path="/employee/edit" element={<EditEmployee/>}/>
              <Route path="/employee/get-by-email" element={<GetEmployee/>}/>
              <Route path="/employee/get" element={<GetAllEmployees/>}/>
              <Route path="/employee/delete" element={<DeleteEmployee/>}/>
          </Routes>
      </>
  )
}

export default App
