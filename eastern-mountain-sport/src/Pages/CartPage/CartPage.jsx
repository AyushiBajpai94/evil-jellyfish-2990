import React from 'react'
import Banner from "../CartPage/Banner.JPG"
import styled from "styled-components"
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { DeleteIcon} from '@chakra-ui/icons'
// import { IconButton } from '@chakra-ui/react'



const CartPage = () => {
  return (
    <DIV>
      <Navbar />
      <img src={Banner} alt="" />
      <h1>Shopping Cart</h1>
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
            <div style={{ border: "1px solid gray",padding:"10px" }}>
             <DeleteIcon/>
 
            </div>
          </div>
          <div style={{ border: "2px solid gray", marginTop: "30px", textAlign: "center" }}>
            {/* <Link>Spend $79.03 more to get Free Ground Shipping</Link> */}
            <p>Spend $79.03 more to get Free Ground Shipping</p>
          </div>

        </div>

        {/* ordersummary */}

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
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4>Payments :</h4>
              <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                <img src="https://www.ems.com/assets/1e17b54d.svg"alt="" />
                <img src="https://www.ems.com/assets/6db70e0b.svg" alt=""  />
                <img sr="https://www.ems.com/assets/8c29e6cf.svg" alt=""  />
                <img src="https://www.ems.com/assets/e2ef118a.svg" alt="" />
                <img src="https://www.ems.com/assets/4c78d0d1.svg" alt="" />
              </div>
            </div>
            <h3>Shipping :</h3>
            <h3>Returns :</h3>
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
   border: 1px solid green;
   
   .shopping-cart{
      /* border: 1px solid teal; */
      /* text-align: center; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
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
     border: 1px solid gray;

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