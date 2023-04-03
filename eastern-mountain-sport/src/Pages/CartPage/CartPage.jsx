import React, { useEffect, useState } from 'react'
import Banner from "../CartPage/Banner.JPG"
import styled from "styled-components"
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { DeleteIcon } from '@chakra-ui/icons'

import { FaTrashAlt } from 'react-icons/fa';
import axios from "axios"
import { Link } from 'react-router-dom'
// import { IconButton } from '@chakra-ui/react'



const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("https://rich-plum-lamb-garb.cyclic.app/Cart").then((response) => {
      setCartItems(response.data);
    });
  }, []);


  //render cart items function
  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <div key={item.id} className='single-product'>
        <div className='product-image'>
          <div>
            <img src={item.image[0]} alt="" />
          </div>
          <div className='item-detail'>
            <h2> {item.name}</h2>
            <p> INDIAN TEAL, S</p>
            <p>Price : <b>${item.price}</b>  (25% off)</p>
          </div>
        </div>

        <div className='quantity-change'>
          <div className='quantity-button'>
            <button onClick={() => handleQuantityChange(item.id, "-")}>-</button>
            <p> Quantity : {item.quantity}</p>
            <button onClick={() => handleQuantityChange(item.id, "+")}>+</button>
          </div>
          <div>
            {/* <button >Delete</button> */}
            <FaTrashAlt className='delete-icon' onClick={() => handleDeleteItem(index, item.id)} />
          </div>
        </div>
      </div>
    ));
  };

  //quantity change function
  const handleQuantityChange = (productId, operation) => {
    const productIndex = cartItems.findIndex((p) => p.id === productId);
    const product = cartItems[productIndex];
    // Update the quantity based on the operation
    let newQuantity;
    if (operation === "+") {
      newQuantity = product.quantity + 1;
    }
    else if (operation === "-" && product.quantity > 1) {
      newQuantity = product.quantity - 1;
    }
    else {
      // Do nothing if the quantity is already at 1 and the user tries to decrease it further
      return;
    }
    // Create a new copy of the cart with the updated quantity
    const newCart = [...cartItems];
    newCart[productIndex] = { ...product, quantity: newQuantity };
    // Update the state with the new cart
    setCartItems(newCart);
  };

  //delete product function
  const handleDeleteItem = (itemIndex, itemId) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(itemIndex, 1);
    setCartItems(newCartItems);
    axios.delete(`https://rich-plum-lamb-garb.cyclic.app/Cart/${itemId}`);
  }

  //rneder total price function
  const renderTotalPrice = () => {
    const totalPrice = cartItems.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);

    return <div>
      <h4> <b>Order Summary</b> </h4> <br />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <p>Subtotal :</p>
        <p> ${totalPrice}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <p>Shipping :</p>
        <p>-</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <p>Tax :</p>
        <p>-</p>
      </div>

      <hr />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <p> <b>Total :</b> </p>
        <p>${totalPrice}</p>
      </div>
      <br />
      <Link to="/cart/checkout"> <button>Checkout</button></Link>
      <br /> <br />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>Payments :</h4>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <img src="https://www.ems.com/assets/1e17b54d.svg" alt="" />
          <img src="https://www.ems.com/assets/6db70e0b.svg" alt="" />
          <img sr="https://www.ems.com/assets/8c29e6cf.svg" alt="" />
          <img src="https://www.ems.com/assets/e2ef118a.svg" alt="" />
          <img src="https://www.ems.com/assets/4c78d0d1.svg" alt="" />
        </div>
      </div>
      <h3>Shipping : from $7.99 - Free when you spend</h3>
      <h3>Returns : Easy Returns</h3>
    </div>
  };

  return (
    <DIV>
      <Navbar />
      <img src={Banner} alt="" /> <br />
      <p className='h1-tag'> Shopping Cart </p> <br />
      <div className='shopping-cart'>
        {/* single product */}
        <div className='product'>
          {renderCartItems()}
        </div>
        {/* single product end here  */}

        {/* ordersummary */}

        <div className='order-summary'>

          {renderTotalPrice()}
        </div>
      </div> <br /> <br />
      <div className='recently-viwed-product'>
        <p className='h1-tag'>Recently viewed products</p> <br />
        <div className='recently-viwed-product-carousel'>
          <div><img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2083482_402_alt2.jpg" alt="" /></div>
          <div><img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2086758_107_main.jpg" alt="" /></div>
          <div><img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2071415_808_main.jpg" alt="" /></div>
          <div><img src="https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2083351_402_main.jpg" alt="" /></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </DIV>
  )
}

export default CartPage

const DIV = styled.div`
   /* border: 1px solid green; */
   .h1-tag {
    font-size: 25px;
    text-align:center;
    font-weight:bold;
   }
   .shopping-cart{
      /* border: 1px solid teal; */
      /* text-align: center; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
   }
   .product {
      /* border: 1px solid gray; */
      display: flex;
      flex-direction: column;
      gap:35px;
      width:450px;
   }
   .single-product {
     border: 1px solid gray
     
     
   }
   .product-image {
      /* border: 1px solid yellow; */
      display: flex;
      flex-direction: row; 
      justify-content:space-between
   }
   .product-image img {
      width: 200px;
      height: 200px;
      padding: 10px;
      /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      /* border: 1px solid gray; */
   }
   .item-detail {
    /* border: 1px solid gray; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-right:20px
   }

   .item-detail header h1 {
    color: #0c0c0c important;
  }

   .quantity-change {
     /* border: 1px solid teal; */
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     margin-top:10px
    
   }
   .quantity-button {
    /* border: 1px solid teal; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:200px;
   }
   .quantity-button button {
     /* display: flex;
     flex-direction: row; */
     width: 35px;
     height: auto;
     font-size: large;
     border: 1px solid gray;
     background-color: #c0d3ba;
     color: black;
     transition: background-color 0.3s ease;
     align-items:center
     &:hover {
      background-color: #3acc7b;
      }
     
   }
   .delete-icon {
    font-size: 24px;
    /* border: 1px solid gray; */
     margin-right:50px
   }
   .order-summary {
     border: 2px solid gray;
     width: 400px;
     height: 400px;
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
      padding:30px
      /* margin-top:30px */
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

// import React, { useState } from "react";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const renderCartItems = () => {
//     return cartItems.map((item) => (
//       <div key={item.id}>
//         <div>{item.title}</div>
//         <img src={item.image} alt={item.title} />
//         <div>Quantity: {item.quantity}</div>
//         <button onClick={() => removeItem(item.id)}>Remove</button>
//       </div>
//     ));
//   };

//   const renderTotalPrice = () => {
//     const totalPrice = cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//     return <div>Total Price: {totalPrice}</div>;
//   };

//   return (
//     <div>
//       <h1>Cart Page</h1>
//       {cartItems.length > 0 ? (
//         <div>
//           {renderCartItems()}
//           {renderTotalPrice()}
//         </div>
//       ) : (
//         <div>Your cart is empty</div>
//       )}
//     </div>
//   );
// };



  // const renderCartItems = () => {
  //   return cartItems.map((item) => (
  //     <div key={item.id}>
  //       <div>{item.title}</div>
  //       <img src={item.image} alt={item.title} />
  //       <div>Quantity: {item.quantity}</div>
  //       <button onClick={() => handleDeleteItem(item.id)}>Remove</button>
  //     </div>
  //   ));
  // };