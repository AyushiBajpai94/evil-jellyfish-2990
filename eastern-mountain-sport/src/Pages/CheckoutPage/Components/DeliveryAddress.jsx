import React from 'react'

function DeliveryAddress() {
    return (
        <div>
            <div className='shipping-address'>
                <form>
                    <h1>Shipping Address</h1>
                    <label>Email</label>
                    <input type="email" placeholder='Email' />

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
        </div>
    )
}

export default DeliveryAddress
