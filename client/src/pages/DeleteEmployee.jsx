import {useState} from "react";
import axios from "axios";
import '../css/Form.css'

const DeleteEmployee = () => {

    const [email, setEmail] = useState("");

    const handleDelete = async () => {
        await axios.delete(`http://localhost:8080/employee/delete/${email}`);
        alert("Employee Deleted!");
    }

    return(
        <div>
            <h2>Delete Employee by Email</h2>
            <input placeholder="Email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default DeleteEmployee;