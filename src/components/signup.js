
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import React,{useState,useEffect} from 'react';
import './page.css';
const URL= process.env.REACT_APP_BACKEND_SERVER;



const Signup=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate("/");
        }
    })


   /// using fetch function which is built in javascript module

    // const collectData=async (e)=>{
    //         e.preventDefault();
    //         let result= await fetch("http://localhost:8000/register",{
    //             method:"post",
    //             body: JSON.stringify({name,password,email}),
    //             headers:{"Content-Type":"application/json"}
    //         });
    //         // result=await result.json();
    //         // console.warn(result);
    //         if (result){
    //             navigate("/");
    //         }

    // }

    // using axios module which  is a npm packdge

    const CollectData = async(e) =>{
        e.preventDefault();
        const baseUrl = `${URL}/register`;
        const data = {name,email,password ,header:{}};
        const result = await axios.post(baseUrl, data);
        console.log(result);
        if (result){
                        navigate("/");
                    }
        localStorage.setItem("user",JSON.stringify(result.data.result));
        localStorage.setItem("token",JSON.stringify(result.data.auth));        
        
        }

    return(
           <form>
                <h2 className='heading'>Register</h2>
                <div className='in'>
                    <input type="text"  placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value) }/>
                    <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value) }/>
                    <input type="email" placeholder='Enter Mail id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button className="bt" onClick={(e)=>CollectData(e)}>register</button>
                </div>
           </form>
)
}

export default Signup;