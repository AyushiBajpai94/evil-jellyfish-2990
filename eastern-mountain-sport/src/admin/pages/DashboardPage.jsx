import { Box, Grid, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import {PolarArea} from 'react-chartjs-2'; 
import { useLocation } from 'react-router-dom';

export default function DashboardPage() {
  const location=useLocation();
  const [products,setProducts]=useState([]);
  const [productsData,setProductsData]=useState({
    labels: [
      'Men',
      'Women',
      'Footwear'
    ],
    datasets: [{
      data: products,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  })

  const [usersData,setUsersData]=useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label:'Users',
      data: [100,238,578,1099,966,1000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  })
  
  async function getData(){
    const data=[];
    const men=await axios.get('https://rich-plum-lamb-garb.cyclic.app/Mens');
    let menData=await men;
    data.push(menData.data.length);
    const women=await axios.get('https://rich-plum-lamb-garb.cyclic.app/Womens');
    let womenData=await women;
    data.push(womenData.data.length);
    const footwear=await axios.get('https://rich-plum-lamb-garb.cyclic.app/Footwear');
    let footwearData=await footwear;
    data.push(footwearData.data.length);
    setProducts(data);
    let obj={...productsData,datasets:productsData.datasets[0].data=data};
    // console.log(2);
  }
  // console.log(location);

  useEffect(()=>{
    getData();
  },[location]);

  return (
    products.length <=0 ? <div style={{textAlign:'center'}}>
      <Spinner size={'xl'}/>
      </div>
      :<Grid w={'50%'} gridTemplateColumns={{base:'repeat(1,100%)',md:'repeat(2,40%)'}} gap={'20%'} m='auto'>
      <Box>
        {products?.length>0 ?<PolarArea data={productsData}/>:''}
      </Box>
      <Box>
        <Line data={usersData}/>
      </Box>
    </Grid>
  )
}
