import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function ProductCard({name,price,brand,image,id}) {
  return <Box data-id={id} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} p='5' borderRadius={'10'}>
    <Image src={image[0]} alt={name}/>
    <Text as={'b'} noOfLines='2'>{name}</Text>
    <Text>{brand}</Text>
    <Text>{price}</Text>
    <Button>Edit</Button><Button>Delete</Button>
  </Box>
}
