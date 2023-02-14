
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import React,{useEffect, useState} from 'react';
import './page.css';


const Login=()=>{
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();
//if user has already logged in then can not go back to log in page without logout

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
          navigate("/");
         }
    })



    const handlelogin=async(e)=>{
        if(email && password){ e.preventDefault();
            let data={email,password};
    
            const baseURL="http://localhost:8000/login";
            let result= await axios.post(baseURL,data);
            // console.log(result);
            if(result.data.auth){
                localStorage.setItem("user",JSON.stringify(result.data.user));
                localStorage.setItem("token",JSON.stringify(result.data.auth));

                navigate("/");

            }
            else{
                alert("please enter correct details");
            }
        }
        else{
            alert("enter both field");
        }
       
    }






    return(
           <form>
                <h2 className='heading'>Login</h2>
                <div className='in'>
                    <input type="email" placeholder='Enter Mail id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value) }/>
                    <button className="bt" onClick={(e)=>handlelogin(e)}>Login</button>
                </div>
           </form>
)
}

export default Login;