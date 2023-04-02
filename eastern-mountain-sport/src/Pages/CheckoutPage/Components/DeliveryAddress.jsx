import React, { useState } from 'react'

const initaddress = {
    email: "abc@gmail.com",
    firstname: "vinod",
    lastname: "hadmode",
    country: "india",
    address: "xyz,pune",
    city: "pune",
    state: "maharastra",
    zipcode: "545546",
    phone: "1234567891"

}

function DeliveryAddress() {
    const [formState, setFormState] = useState(initaddress)
    const [addressState, setAddressState] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setAddressState((prevState) => [...prevState, formState]);
    }

    return (
        <div>
            <div className='shipping-address'>
                <form onSubmit={handleSubmit}>
                    <h1>Shipping Address</h1>
                    <label>Email</label>
                    <input type="email" placeholder='Email' name="email" value={formState.email}
                        onChange={handleChange} />

                    <label>First Name</label>
                    <input type="text" placeholder='First Name' name="firstname" value={formState.firstname} onChange={handleChange} />

                    <label>Last Name</label>
                    <input type="text" placeholder='Last Name' name="lastname" value={formState.lastname} onChange={handleChange} />

                    <label>Country</label>
                    <select name="country"  value={formState.country} onChange={handleChange}>
                        <option value="india">India</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                    <label>Address</label>
                    <input type="text" placeholder='Addreess' name="address"  value={formState.address} onChange={handleChange} />

                    <label>City</label>
                    <input type="text" placeholder='City' name="city"  value={formState.city} onChange={handleChange}/>

                    <label>State</label>
                    <select name="state"   value={formState.state} onChange={handleChange}>
                        <option value="india">Plese Select..</option>
                        <option value="india">Maharastra</option>
                        <option value="canada">UP</option>
                        <option value="usa">Rajastan</option>
                    </select>

                    <label>Zipcode</label>
                    <input type="text" placeholder='Zipcode'  name="zipcode"  value={formState.zipcode} onChange={handleChange} />

                    <label>Phone</label>
                    <input type="text" placeholder='Phone' name="phone"  value={formState.phone} onChange={handleChange} />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default DeliveryAddress
