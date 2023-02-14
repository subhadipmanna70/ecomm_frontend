
import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams,useNavigate} from "react-router-dom"
import "./page.css";


const Updateproduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        getProductdetails();

    },[]) 
    
  
  
    const getProductdetails=async()=>{
        let result=await axios.get(`http://localhost:8000/product/${params.id}`,{headers: {authorization: JSON.parse(localStorage.getItem("token"))
    }});
        console.warn(result)
        setName(result.data.name);
        setPrice(result.data.price);
        setCategory(result.data.category);
        setCompany(result.data.company);
    }
    



    const updateProduct=async()=>{
        let data={name,price,category,company};
       let result=await axios.put(`http://localhost:8000/product/${params.id}`,data,{headers: {authorization: JSON.parse(localStorage.getItem("token"))
        }});
        if(result.data.modifiedCount>0){
            alert("product details updated");
            navigate("/");
        }
    }



    return(
        <div className='in'>
            <h3>UPDATE PRODUCT</h3>
            <input type="text" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)} className='input'/>
            <input type="number" placeholder="Product Price" value={price} onChange={(e)=>setPrice(e.target.value)} className='input'/>
            <input type="text" placeholder="Product Category" value={category} onChange={(e)=>setCategory(e.target.value)} className='input'/>
            <input type="text" placeholder="Product Company" value={company} onChange={(e)=>setCompany(e.target.value)} className='input'/>
           <div style={{paddingRight:"100px"}}><button className="bt" style={{width:"150px",}} onClick={updateProduct}>Update Product</button></div> 
        </div>
    )
}





export default Updateproduct;