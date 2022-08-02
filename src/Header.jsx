import React from "react";
import {NavLink} from 'react-router-dom'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';




const Header = ()=>{
    return(<>
     <div className="container-fluid mb-5">
        <div className="row">
           <div className="col-10 mx-auto">
           <header>
     <AcUnitOutlinedIcon className="Logo" fontSize="large"/>
        <NavLink exact="true" className = "Nav" activeclassname="active-class" to="./">Home</NavLink>
        <NavLink exact="true" className = "Nav" activeclassname="active-class" to="./about">About</NavLink>
        <NavLink exact="true" className = "Nav" activeclassname="active-class" to="./services">Services</NavLink>
        <NavLink exact="true" className = "Nav" activeclassname="active-class" to="./contact">Contacts</NavLink>
     </header>
           </div>

        </div>

    </div>
   
    </>)
}


export default Header;



