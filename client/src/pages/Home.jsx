import {useNavigate} from "react-router-dom";
import '../css/Home.css'

const Home = () => {

    const navigate = useNavigate();

    return(
        <div className="home-container">
            <h3>Select an Operation:</h3>
            <div className="button-grp">
                <button onClick={()=> navigate('/employee/add')}>Add Employee</button>
                <button onClick={()=>navigate('/employee/get-by-email')}>Get Employee By Email</button>
                <button onClick={()=>navigate('/employee/get')}>Get All Employee</button>
                <button onClick={()=>navigate('/employee/edit')}>Edit Employee by Email</button>
                <button onClick={()=>navigate('/employee/delete')}>Delete Employee by Email</button>
            </div>
        </div>
    );
}

export default Home;