import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import DashboardPage from './DashboardPage'
import AdminLoginPage from './AdminLoginPage'

export default function AdminRoutes() {
  return (
    <>
    <AdminNavbar/>
    <div style={{marginTop:'100px'}}></div>
    <Routes>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/admin-login' element={<AdminLoginPage/>}/>
    </Routes>
    </>
  )
}
