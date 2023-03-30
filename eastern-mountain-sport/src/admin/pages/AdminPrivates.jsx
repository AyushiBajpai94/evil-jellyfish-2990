import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function AdminPrivates({Children}) {
  const location=useLocation();
  const store=useSelector((store)=>{
    return store.adminLoginReducer.isAuth;
  })

  return !store ? <Navigate to={'/admin-login'} state={location.pathname}/>: Children;
}
