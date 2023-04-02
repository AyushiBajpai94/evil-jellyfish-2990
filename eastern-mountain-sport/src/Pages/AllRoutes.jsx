import { Routes, Route } from "react-router-dom"
import Login from "./Login"
import Homepage from "./HomePage"
import Mens from "./Mens"
import CartPage from "./CartPage/CartPage"
import Checkout from "./CheckoutPage/Checkout";
import Register from "./RegisterPage"

export const AllRoutes = () =>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path="/mens" element={<Mens/>}></Route>
            <Route path="/womens" element={<Mens/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
            <Route path="/cart/checkout" element={<Checkout/>}></Route>
        </Routes>
        </>
    )
}