import { Button, Container, HStack, Image, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { AdminLoginNow } from '../../Redux/AdminRedux/AdminActions';
import {AdminDataNow} from '../../Redux/AdminRedux/AdminActions';
import logo from '../../Logo/AS-removebg-preview.png';

export default function AdminLoginPage() {
  const location=useLocation();
  const [loginData,setData]=useState({
    email:'',
    password:''
  })
  const adminAuth=useSelector((store)=>{
    return store.adminLoginReducer.isAuth;
  });
  const navi=useNavigate();
  const dispatch=useDispatch();
  // console.log(adminAuth);

  

  function loginCheck(e){
    e.preventDefault();
    dispatch(AdminDataNow);
    dispatch(AdminLoginNow(loginData)).then(()=>{
      navi(`${location.state? location.state:'/dashboard'}`,{replace:true});
    })
    setData({
      email:'',
      password:''
    })
  }



  return (
    <VStack textAlign={'center'} >
        <Image src={logo} alt='siteLogo'/>
        <form onSubmit={loginCheck} style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',padding:'25px',borderRadius:'10px'}}>
        <Input type={'text'} isRequired={true} value={loginData.email} mb={'10px'} placeholder='User' onChange={(e)=>{
          setData({...loginData,email:e.target.value});
        }}/>
        <Input type={'password'} isRequired={true} value={loginData.password} mb={'10px'} placeholder='Password' onChange={(e)=>{
          setData({...loginData,password:e.target.value});
        }}/>
        <Button type='submit'>Login</Button>
        </form>
    </VStack>
  )
}
