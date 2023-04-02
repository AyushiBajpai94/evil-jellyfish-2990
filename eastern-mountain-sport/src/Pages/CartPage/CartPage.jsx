import React, { useEffect, useState } from 'react'
import Banner from "../CartPage/Banner.JPG"
import styled from "styled-components"
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { DeleteIcon } from '@chakra-ui/icons'
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

  console.log("cartItems", cartItems);


  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className='single-product'>
        <div className='product-image'>
          <div>
            <img src={item.image[0]} alt="" />
          </div>
          <div>
            <h2>{item.name}</h2>
            <p>Brand name : INDIAN TEAL, S</p>
            <p>Price : ${item.price}</p>
          </div>
        </div>

        <div className='quantity-change'>
          <div className='quantity-button'>
            <button onClick={() => handleQuantityChange(item.id, "-")}>-</button>
            <p> Quantity : {item.quantity}</p>
            <button onClick={() => handleQuantityChange(item.id, "+")}>+</button>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
      </div>
    ));
  };

  const handleQuantityChange = (productId, operation) => {
    const productIndex = cartItems.findIndex((p) => p.id === productId);
    const product = cartItems[productIndex];

    // Update the quantity based on the operation
    let newQuantity;
    if (operation === "+") {
      newQuantity = product.quantity + 1;
    } else if (operation === "-" && product.quantity > 1) {
      newQuantity = product.quantity - 1;
    } else {
      // Do nothing if the quantity is already at 1 and the user tries to decrease it further
      return;
    }

    // Create a new copy of the cart with the updated quantity
    const newCart = [...cartItems];
    newCart[productIndex] = { ...product, quantity: newQuantity };

    // Update the state with the new cart
    setCartItems(newCart);
  };

  // const handleDeleteItem = (itemIndex, itemId) => {
  //   const newCartItems = [...cartItems];
  //   newCartItems.splice(itemIndex, 1);
  //   setCartItems(newCartItems);
  //   axios.delete(`https://bored-plum-sparrow.cyclic.app/users/${itemId}`);
  // }

  return (
    <DIV>
      <Navbar />
      <img src={Banner} alt="" />
      <h1>Shopping Cart</h1>
      <div className='shopping-cart'>
        {/* single product */}
        <div className='product'>
          {renderCartItems()}
        </div>
        {/* single product end here  */}

        {/* ordersummary */}

        <div className='order-summary'>
          <div>
            <h4>Order Summary</h4>
            <p>Subtotal - $20.00</p>
            <p>Shipping - </p>
            <p>Subtotal - </p>
            <hr />
            <h5>Total - $20.00</h5>
            <Link to="/cart/checkout"> <button>Checkout</button></Link>
            <br /> <br />
            <hr />
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
        <Footer />
      </div>
    </DIV>
  )
}

export default CartPage

const DIV = styled.div`
   /* border: 1px solid green; */
   
   .shopping-cart{
      /* border: 1px solid teal; */
      /* text-align: center; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
   }
   .product {
      /* border: 1px solid red; */
      width:500px;
   }
   .single-product {
     /* border: 1px solid green */

     
   }
   .product-image {
      /* border: 1px solid yellow; */
      display: flex;
      flex-direction: row; 
      justify-content:space-around
   }
   .product-image img {
      width: 200px;
      height: 200px;
      padding: 10px;
      border: 1px solid gray;
   }
   .quantity-change {
     /* border: 1px solid teal; */
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     margin-top:10px
    
   }
   .quantity-button {
    /* border: 1px solid teal; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:200px
   }
   .quantity-button button {
     /* display: flex;
     flex-direction: row; */
     width: 50px;
     height: auto;
     font-size: medium;
     border: 1px solid gray;
     background-color: #4e8f42;
     color: white;
     transition: background-color 0.3s ease;
     align-items:center
     &:hover {
      background-color: #3acc7b;
      }
     
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