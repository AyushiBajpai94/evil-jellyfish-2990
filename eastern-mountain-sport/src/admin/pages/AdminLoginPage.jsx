import { Button, Container, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { AdminLoginNow } from '../AdminRedux/AdminActions';

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
  // console.log(location);

  

  function loginCheck(e){
    e.preventDefault();
    dispatch(AdminLoginNow(loginData));
    setData({
      email:'',
      password:''
    })
  }
  if(adminAuth){
   navi(location.state);
  }
  useEffect(()=>{
    
  },[])



  return (
    <Container textAlign={'center'}>
        <form onSubmit={loginCheck}>
        <Input type={'text'} isRequired={true} value={loginData.email} onChange={(e)=>{
          setData({...loginData,email:e.target.value});
        }}/>
        <Input type={'password'} isRequired={true} value={loginData.password} onChange={(e)=>{
          setData({...loginData,password:e.target.value});
        }}/>
        <Button type='submit'>Login</Button>
        </form>
    </Container>
  )
}
