import React, { useEffect, useState } from "react";
import "./Menu.css";
import apiUtils from "../util/api.utils"
import { useNavigate } from "react-router";


const Menu = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const getProducts = async () => {
    try {
      const cookies = await apiUtils.getProducts()
      setProducts(cookies)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, []
  ) 
    const createNewOrder  = async (productId) => {
      try {
          const newOrder = await apiUtils.createOrder(productId)
        navigate(`/order/${newOrder._id}`)
      } catch (error) {
        console.log(error)
      }
    }

   

  return (
    <div>
    {products.length ?  products.map(product => {
      return (
      <div className=" mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.imageUrl}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-title">{product.title}</div>
              <p className="card-text">{product.description}</p>
              <h5>{product.price}</h5>
              <button onClick={() => createNewOrder(product._id)} className="button">Buy</button>
            </div>
          </div>
        </div>
      </div>
      )
    }): <h1>error</h1>
   
    }
     
    </div>
  );
};

export default Menu;
