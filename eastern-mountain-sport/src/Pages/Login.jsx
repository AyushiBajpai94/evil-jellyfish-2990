
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link
   
  } from '@chakra-ui/react';
 import { Link as RouterLink, useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { LoginUser } from '../Redux/LoginRedux/LoginAction';

import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'

import { auth } from '../firebase'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

  
  export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {token,isAuth}=useSelector((state)=>state.LoginReducer)
    const dispatch=useDispatch();
    const navigate=useNavigate();
  console.log(token)


    const handleSubmit=(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        console.log(userCredential)
        dispatch(LoginUser(userCredential.user.email))
        alert("LoggedIn")
      }).catch((err)=>console.log(err));
      
    };
    if(isAuth===true){
      navigate("/")
    }
   
  
    return (
      <>
      <Navbar />
      <Flex
      border={"1px solid red"}
        minH={'100vh'}
        // align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={5} mx={'auto'} maxW={'lg'} py={8} px={20}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} fontFamily={'sans-serif'}>
              Sign In
            </Heading>
          </Stack>
          <Box
          border={'2px solid #bfbfbf'}
            // rounded={'lg'}
            bg={useColorModeValue('#f4efde', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
             
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" bgColor={'white'}  onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" bgColor={'white'} onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
              <Stack spacing={10} pt={2} >
                {/* <RouterLink to={"/"}> */}
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  onClick={handleSubmit}
                  bgColor='#4e6d58'
                  _hover={{
                    bg: '#678a73',
                  }}>
                  LogIn
               
                </Button>
                {/* </RouterLink> */}
              
              </Stack>
              <Box style={{borderBottom:'1px solid black',borderTop:'1px solid black',padding:'6px',}}>
              <Link color={'#4e6d58'}>Forgot password?</Link>
              </Box>
             
              <Stack pt={6}>
                <Text align={'center'}>
                  New customer? <RouterLink to={'/register'} color={'#4e6d58'} >Create your account</RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
      </>
    );
  }




