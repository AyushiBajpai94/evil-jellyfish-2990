import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/RegisterPage'
const MainRoute = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route  path='/register' element={<Register />}/>
    </Routes>
  )
}

export default MainRoute
