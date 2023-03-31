import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import DashboardPage from './DashboardPage'
import AdminLoginPage from './AdminLoginPage'
import AdminProducts from './AdminProducts'
import AdminPrivates from './AdminPrivates'

export default function AdminRoutes() {
  return (
    <>
    {/* <div style={{marginTop:'100px'}}></div> */}
    <Routes>
        <Route path='/dashboard' element={<AdminPrivates><DashboardPage/></AdminPrivates>}/>
        <Route path='/admin-products' element={<AdminPrivates><AdminProducts/></AdminPrivates>}/>
        <Route path='/admin-login' element={<AdminLoginPage/>}/>
    </Routes>
    </>
  )
}
