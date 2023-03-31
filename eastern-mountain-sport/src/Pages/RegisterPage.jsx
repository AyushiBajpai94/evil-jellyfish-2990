
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,Form
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'

import { auth } from '../firebase'

  
  export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [username,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
    const handleRegister=(e)=>{
      e.preventDefault();
     createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        console.log(userCredential)
        alert("Account created")
      }).catch((err)=>console.log(err))
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Create Account
            </Heading>
          </Stack>
          
          <Box
          border={'2px solid #bfbfbf'}
            // rounded={'lg'}
            bg={useColorModeValue('#f4efde', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input type="text"  bgColor={'white'}  name='firstName' value={username}   onChange={(e)=>setUserName(e.target.value)}
                     />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" bgColor={'white'}  name='email' value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} bgColor={'white'}  name='password' value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button onClick={handleRegister}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  
                  bgColor='#4e6d58'
                  _hover={{
                    bg: '#678a73',
                  }}>
                  Create Account
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'green.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }



// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import React from 'react'
// import { useState } from 'react'
// import { auth } from '../firebase'

// const Register = () => {
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')

//   const handleRegister=(e)=>{
//     e.preventDefault();
//    createUserWithEmailAndPassword(auth,email,password)
//     .then((userCredential)=>{
//       console.log(userCredential)
//     }).catch((err)=>console.log(err))
//   }
//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleRegister}>
        
//         <input type="email" placeholder='Enter email' value={email}
//         onChange={(e)=>setEmail(e.target.value)} />
//         <input type="password" placeholder='Enter password'
//           value={password} onChange={(e)=>setPassword(e.target.value)}/>
//           <button type='submit'>Create Account</button>
//       </form>
//     </div>
//   )
// }

// export default Register
