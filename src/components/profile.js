import React from 'react';
import "./page.css"


const Profile=()=>{
    return(
        <div>
            <div className='prof'>
                <h3>Name :  {JSON.parse(localStorage.getItem("user")).name}</h3>
                <h3>Email : {JSON.parse(localStorage.getItem("user")).email}</h3>
            </div>
        </div>
    )
}

export default Profile;