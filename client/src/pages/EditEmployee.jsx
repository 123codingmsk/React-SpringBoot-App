import {useState} from "react";
import axios from "axios";
import '../css/Form.css'

const EditEmployee = () => {

    const [email, setEmail] = useState('');

    const [updatedData, setUpdatedData] = useState({
        name: "",
        phone: "",
        department: ""
    });

    const handleChange = (e) => {
        setUpdatedData({...updatedData, [e.target.name]: e.target.value});
    }

    const handleUpdate = async ()=>{
        await axios.put(`http://localhost:8080/employee/edit/${email}`, updatedData);
        alert("Employee updated!");
    }

    return(
        <div>
            <h2>Edit Employee by Email</h2>
            <input placeholder="Email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />
            <input name="name" placeholder="New Name" onChange={handleChange}/>
            <input name="phone" placeholder="New Phone" onChange={handleChange}/>
            <input name="department" placeholder="New Department" onChange={handleChange}/>
            <button onClick={handleUpdate}>Submit</button>
        </div>
    );
}

export default EditEmployee;