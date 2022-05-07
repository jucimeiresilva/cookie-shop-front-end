import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiUtils from "../util/api.utils";
import "./OrderPage.css";




const OrderPage = () => {
    const [order, setOrder] = useState({})
    const {id} = useParams()
    const getOneOrder = async () => {
        try {
            const data = await apiUtils.getOrder(id)
            setOrder(data) 
        console.log(data)
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
        getOneOrder()
        console.log(order)}, [])

    return (<>
    {
       order.user ?
       <div>
        <h1> {order.user.name} </h1>
           <h3> Thank you for your purchase, may you have a sweet experience!!! </h3>
           <p> Order Summary:</p>
           <h3>Chosen kit: {order.product.title}</h3>
               <p>2 Chocolate cookies with milk chocolate flavor</p>
               <p>4 Vanilla Cookies with Milk Chocolate Flavors</p>
               <p>6 Red Velvet Cookies with White Chocolate Chips</p>
           <p> Your order will be sent to the address:</p>
           <h3> {order.user.adress} </h3>
           <p>Delivery time up to 20 min.</p>
       </div>:<h1>error</h1>
    }
     
        </>
    )
}



export default OrderPage;