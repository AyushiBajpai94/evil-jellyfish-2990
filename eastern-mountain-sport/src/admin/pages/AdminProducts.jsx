import { Box, Button, Container, Divider, Grid, Input, Spinner } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddProduct from '../components/AddProduct';
import AdminNavbar from '../components/AdminNavbar';
import ProductCard from '../components/ProductCard';

export default function AdminProducts() {
    const[mainData,setMainData]=useState([]);
    const [reloadFlag,setReload]=useState(false);

    function getDataApi(){
        const data=[];
        axios.get(`https://rich-plum-lamb-garb.cyclic.app/Mens`)
        .then((res)=>{
            // console.log(res.data);
            data.push(...res.data);
        }).catch((err)=>{
            console.log('dataFetching error');
        })
        axios.get(`https://rich-plum-lamb-garb.cyclic.app/Womens`)
        .then((res)=>{
            // console.log(res.data);
            data.push(...res.data);
            // console.log(data);
        }).catch((err)=>{
            console.log('dataFetching error');
        }).finally(()=>{
            setMainData(data);
        })
    }


    useEffect(()=>{
        getDataApi();
    },[reloadFlag])



  return <>
    <AdminNavbar/>
    <div style={{marginTop:'100px'}}></div>
    <Box display={'flex'} flexDirection="column" w={'100%'}>
    <Box w='60%' m={'auto'} mb={'10'}>
    <Input type={'search'} placeholder='Search Products'/>
    <AddProduct Margin={'10px'}  setReload={setReload} reloadFlag={reloadFlag} setMainData={setMainData}/>
    </Box> 
    {mainData.length<=0? <div style={{textAlign:'center'}}>
  <Spinner size={'xl'}/>
  </div>
  : 
    <Grid gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(4,24%)'}} gap={{md:'1%'}} width={'80%'} m='auto'>
    {mainData?.length>0 && mainData.map((ele,index)=>(
        <ProductCard key={index} {...ele} setReload={setReload} reloadFlag={reloadFlag} setMainData={setMainData}/>
        ))}
    </Grid>
    }
  </Box>
  </>
}
