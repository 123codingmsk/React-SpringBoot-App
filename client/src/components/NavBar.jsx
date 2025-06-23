import '../css/NavBar.css'
import {useNavigate} from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    return(
        <div className="navbar">
            <h3>Employee Management System</h3>
            <button className="home-button" onClick={()=>navigate('/')}>Home</button>
        </div>
    );
}

export default NavBar;