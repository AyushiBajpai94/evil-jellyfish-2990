import React from 'react'
import Banner from "../CartPage/Banner.JPG"
import styled from "styled-components"
import { Link } from "react-router-dom"

const CartPage = () => {
  return (
    <DIV>
      <h2>NAVBAR</h2>
      <img src={Banner} alt="" />
      <h2>Shopping Cart</h2>
      <div className='shopping-cart'>
        <div className='product'>
          <div className='product-image'>
            <div>
              <img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2079373_409_main.jpg" alt="" />
            </div>
            <div>
              <h4>Product name  Eastern Mountain Sports.</h4>
              <p>Brand name</p>
              <p>Price : $20.00</p>
            </div>
          </div>
          <div className='select-delete'>
            <div>
              <select name="">
                <option value="">Quantity:1</option>
              </select>
            </div>
            <div>
              Delete Icon
            </div>
          </div>
          <div style={{ border: "2px solid gray", marginTop: "30px", textAlign: "center" }}>
            {/* <Link>Spend $79.03 more to get Free Ground Shipping</Link> */}
            <p>Spend $79.03 more to get Free Ground Shipping</p>
          </div>

        </div>
        <div className='order-summary'>
          <div>
            <h4>Order Summary</h4>
            <p>Subtotal - $20.00</p>
            <p>Shipping - </p>
            <p>Subtotal - </p>
            <hr />
            <h5>Total - $20.00</h5>
            <button>Checkout</button>
            <br /> <br /> 
            <hr />
            <h4>Payments :</h4>
            <h4>Shipping :</h4>
            <h4>Returns :</h4>
          </div>
        </div>
      </div>
      <div className='recently-viwed-product'>
        <h2>Recently viwed products</h2>
        <div className='recently-viwed-product-carousel'>
          <div><img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2079373_409_main.jpg" alt="" /></div>
          <div><img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2079373_409_main.jpg" alt="" /></div>
          <div><img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2079373_409_main.jpg" alt="" /></div>
          <div><img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2079373_409_main.jpg" alt="" /></div>
        </div>
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </DIV>
  )
}

export default CartPage

const DIV = styled.div`
   border: 1px solid green;
   
   .shopping-cart{
      /* border: 1px solid teal; */
      /* text-align: center; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
   }
   .product-image {
      /* border: 1px solid red; */
      display: flex;
      flex-direction: row; 
   }
   .product-image img {
      width: 100px;
      height: 100px;
      padding: 10px;
   }
   .select-delete {
     /* border: 1px solid teal; */
     display: flex;
     flex-direction: row;
     justify-content: space-between;
   }
   .select-delete select {
     width: 170px;
     height: 40px;
     font-size: medium;
   }
   .order-summary {
     border: 2px solid gray;
     width: 350px;
     height: auto;
     padding: 20px;
     background-color: #ecdcdc;
   }
   .order-summary button {
      width: 100%;
      height: 40px;
      font-size: medium;
      font-weight: bold;
      background-color: #607a60;
      color: white;
   }
   .recently-viwed-product {
      background-color: #f0ecec;
   }
   .recently-viwed-product-carousel{
       display: grid;
       grid-template-columns: repeat(4,1fr);
       justify-content: center;
       margin: auto;
       align-items: center;
       /* padding: 30px; */
       width: 70%;

   }
   .recently-viwed-product-carousel img {
       width: 200px;
       height: 200px;
       border: 1px solid gray;
   }
`