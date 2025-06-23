import {useState} from "react";
import axios from "axios";
import '../css/Form.css'

const GetEmployee = () => {

    const [email, setEmail] = useState("");

    const[employee, setEmployee] = useState(null);

    const fetchEmployee = async () => {
        const res = await axios.get(`http://localhost:8080/employee/get/${email}`);
        setEmployee(res.data);
    }

    return(
        <div>
            <h2>Get Employee by Email</h2>
            <input placeholder="Enter Email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />
            <button onClick={fetchEmployee}>Search</button>
            {employee && (
                <div>
                    <p><b>Name: </b>{employee.name}</p>
                    <p><b>Email:</b> {employee.email}</p>
                    <p><b>Phone:</b> {employee.phone}</p>
                    <p><b>Department:</b> {employee.department}</p>
                </div>
            )}
        </div>
    );
}

export default GetEmployee;