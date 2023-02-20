import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./page.css";

const URL = process.env.REACT_APP_BACKEND_SERVER;


const Products = () => {
  const [productlist, setProductlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getProductlist = async () => {
    let auth=localStorage.getItem("user");

    let getProduct = await axios.get(`${URL}/products`, {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
        user_id: JSON.parse(auth)._id
      },
    });
    setProductlist(getProduct.data);
    console.log(JSON.parse(auth)._id);
  };

  const deleteProduct = async (id) => {
    let result = await axios.delete(`${URL}/product/${id}`, {
      headers: { authorization: JSON.parse(localStorage.getItem("token")) },
    });
    getProductlist();
    if (result.data.deletedCount) {
      alert("product deleted");
    }
  };

  const updatehandler = (id) => {
    navigate("/update/" + id);
  };

  const searchHandler = async (key) => {
    if (key) {
      let result = await axios.get(`${URL}/search/${key}`, {
        headers: { authorization: JSON.parse(localStorage.getItem("token")) },
      });
      setProductlist(result.data);
    } else {
      getProductlist();
    }
  };

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        className="searchbox"
        onChange={(e) => searchHandler(e.target.value)}
        type="text"
        placeholder="Search product"
      />

      <ul>
        <li>Serial no</li>
        <li>Category</li>
        <li>Name</li>
        <li>Price</li>
        <li>Operation</li>
      </ul>
      {productlist.length ? (
        productlist.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.category}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li style={{ paddingBottom: "8px" }}>
              <button onClick={() => deleteProduct(item._id)}>DELETE</button>
              {/* <Link style={{paddingLeft:"10px"}} to={"/update/"+item._id}>update</Link> */}
              <button
                style={{ paddingLeft: "10px" }}
                onClick={() => updatehandler(item._id)}
              >
                update
              </button>
            </li>
          </ul>
        ))
      ) : (
        <h2>NO result found</h2>
      )}
    </div>
  );
};

export default Products;
