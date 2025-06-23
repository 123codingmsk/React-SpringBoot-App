import {useState} from "react";
import axios from "axios";
import '../css/Form.css'

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });

    const handleChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value});
    }

    const handleSubmit = async () => {
        await axios.post("http://localhost:8080/employee/add", employee);
        alert("Employee added successfully");
    }

    return(
        <div>
            <h2>Add Employee</h2>
            <input name="name" placeholder="Name" onChange={handleChange}/>
            <input name="email" placeholder="Email" onChange={handleChange}/>
            <input name="phone" placeholder="PhoneNo." onChange={handleChange}/>
            <input name="department" placeholder="Department" onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddEmployee;