import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import React from 'react'
import EditProduct from './EditProduct'

export default function ProductCard({name,price,brand,image,id}) {
  return <Box data-id={id} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} p='5' borderRadius={'10'} _hover={{zoom:'150%'}}>
    <Image src={image[0]} alt={name}/>
    <Text as={'b'} noOfLines='2'>{name}</Text>
    <Text>{brand}</Text>
    <Text>{price}</Text>
    <EditProduct/><Button>Delete</Button>
  </Box>
}
