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
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function Login() {
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={5} mx={'auto'} maxW={'lg'} py={12} px={20}>
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
                <Input type="email" bgColor={'white'}/>
              </FormControl>
              <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" bgColor={'white'}/>
            </FormControl>
              <Stack spacing={10} pt={2} >
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  
                  bgColor='#4e6d58'
                  _hover={{
                    bg: '#678a73',
                  }}>
                  Log in
                </Button>
              </Stack>
              <Box style={{borderBottom:'1px solid black',borderTop:'1px solid black',padding:'6px',}}>
              <Link color={'#4e6d58'}>Forgot password?</Link>
              </Box>
             
              <Stack pt={6}>
                <Text align={'center'}>
                  New customer? <Link color={'#4e6d58'}>Create your account</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }