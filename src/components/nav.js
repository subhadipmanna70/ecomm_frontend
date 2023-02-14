import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
const Nav=()=>{
    const navigate=useNavigate();

    const auth=localStorage.getItem("user");

    const handle=()=>{
        localStorage.clear();
        navigate("/signup");      // use it for more security
        
    }

    return(
        <div>
        {/* <img alt src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fe-commerce-logo&psig=AOvVaw19yIadoV3O-fnS4nonmu_B&ust=1675692025156000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJiU_7DF_vwCFQAAAAAdAAAAABAE'/> */}
       { auth?<ul className='nav-ul'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update/:id">Update Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={handle} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
           

        </ul>
        :
        <ul className='nav-ul rightnav'>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    }
    </div>

    )
}

export default Nav;