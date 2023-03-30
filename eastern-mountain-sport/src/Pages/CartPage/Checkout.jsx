import React from 'react'
import styled from 'styled-components'

function Checkout() {
    return (
        <DIV >
            <div className='email-address'>
                <input type="email" />
            </div>

            <div className='shipping-address'>

                <form>
                    <h1>Shipping Address</h1>
                    <label>First Name</label>
                    <input type="text" placeholder='First Name' />
                    <label>Last Name</label>
                    <input type="text" placeholder='Last Name' />
                    <label>Country</label>
                    <select name="">
                        <option value="india">India</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <label>Address</label>
                    <input type="text" placeholder='Addreess' />
                    <label>City</label>
                    <input type="text" placeholder='City' />

                    <label>State</label>
                    <select name="">
                        <option value="india">Plese Select..</option>
                        <option value="india">Maharastra</option>
                        <option value="canada">UP</option>
                        <option value="usa">Rajastan</option>
                    </select>

                    <label>Zipcode</label>
                    <input type="text" placeholder='Zipcode' />

                    <label>Phone</label>
                    <input type="text" placeholder='Phone' />

                    <button type='submit'>Continue to Shipping Method</button>
                </form>
            </div>
        </DIV>
    )
}

export default Checkout

const DIV = styled.div`
     width: 100%;
     font-size: 18px;
     
    .shipping-address {
        border: 1px solid red;
        display: flex;
        
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
    }
`