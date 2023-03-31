import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import EditProduct from './EditProduct'

export default function ProductCard({name,price,brand,image,id,category,setReload,reloadFlag,setMainData}) {
  return <Box data-id={id} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} p='5' borderRadius={'10'} _hover={{zoom:'150%'}}>
    <Image src={image[0]} alt={name}/>
    <Text as={'b'} noOfLines='2'>{name}</Text>
    <Text>{brand}</Text>
    <Text>{price}</Text>
    <EditProduct id={id} cate={category} setReload={setReload} reloadFlag={reloadFlag} setMainData={setMainData}/><Button onClick={()=>{
        axios.delete(`https://rich-plum-lamb-garb.cyclic.app/${category}/${id}`)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log('deleting error');
        }).finally(()=>{
            setMainData([]);
            setReload(!reloadFlag);
        })
    }}>Delete</Button>
  </Box>
}
