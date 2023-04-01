import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import DeliveryAddress from './Components/DeliveryAddress'
import PaymentMetod from './Components/PaymentForm'
import PaymentForm from './Components/PaymentForm'

const initState={
   email:"",
   firstname:"",
   lastname:"",
   country:"",
   address:"",
   city:"",
   state:"",
   zipcode:"",
   phone:""
} 

function Checkout() {
    const [address,setAddress]=useState(initState)
    return (
        <DIV >
            <Navbar/>
            <DeliveryAddress/>
            <PaymentForm/>
            <Footer/>
        </DIV>
    )
}

export default Checkout

const DIV = styled.div`
     width: 100%;
     font-size: 18px;
     
     
    .shipping-address {
        /* border: 1px solid red; */
        display: flex;
        margin-top:20px
    }
    .shipping-address form {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding: 20px;
        border: 2px solid gray;
        box-sizing: border-box;
        gap: 10px;
        background-color: #f8eeee;
    }
    .shipping-address form input {
        border: 1px solid #ccc;
        padding: 5px;
    }
    .shipping-address form select {
        border: 1px solid #ccc;
        padding: 5px;
    }
    .shipping-address form button {
       background-color: #357229;
       padding: 5px;
       width: 50%;
       display: flex;
       justify-content: center;
       margin: auto;
       color: white;
       transition: background-color 0.3s ease;
       
        &:hover {
        background-color: #8de6b5;
        }
    }
`