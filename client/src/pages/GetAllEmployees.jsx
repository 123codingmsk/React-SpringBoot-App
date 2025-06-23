import {useEffect, useState} from "react";
import axios from "axios";
import '../css/GetAllEmployees.css'

const GetAllEmployees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/employee/get")
            .then(res => setEmployees(res.data));
    }, []);

    return(
        <div>
            <h2>Get All Employees</h2>
            {employees.map(emp=>(
                <div key={emp.id}>
                    <p>{emp.name} ({emp.email}) - {emp.department}</p>
                </div>
            ))}
        </div>
    );
}

export default GetAllEmployees;