import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react'
import ProductList from '../Components/ProductList';
import Sidebar from '../Components/Sidebar';
import styles from "../Styles/Mens.css"
import axios from 'axios';
import Spiwer from "../Components/Swiper"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Womens = () => {
    const [DressesData2, setDress2] = useState([])
    useEffect(() => {
        axios.get("https://rich-plum-lamb-garb.cyclic.app/Womens").then((res) => setDress2(res.data))
    }, [])


    return (
        <>
            <Navbar />
            <div style={styles}>
              
                <Box id='title'>All Womens</Box>
                <Box id='mainbox'>
                    <Sidebar />
                    <Box id="secondbox">
                        <Box id="perpage">
                            <p>2440 Products</p>
                            <div>
                                <select name="" id="page10">
                                    <option value="10 products / page">10 products / page</option>
                                    <option value="30 products / page">30 products / page</option>
                                    <option value="50 products / page">50 products / page</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="page10">
                                    <option value="Sort By : Featured">Sort By : Featured</option>
                                    <option value="Lowest Price">Lowest Price</option>
                                    <option value="Highest Price">Highest Price</option>
                                </select>
                            </div>
                        </Box>
                        <Box id='products'>
                            <ProductList />
                        </Box>
                    </Box>
                </Box>
                <hr style={{ width: "98%", margin: "auto" }} />
                <h2 style={{ textAlign: "start", marginLeft: "14px", fontWeight: "700", marginBottom: "8px", marginTop: "8px" }}>Recently Viewed Products</h2>


                <Box h={"500px"} background={"lightgrey"}>
                    <Box h={"400px"} mt={"3rem"}  >
                        <Spiwer products={DressesData2} v1={3} v2={4} v3={2} v4={1} v5={2} />
                    </Box>
                </Box>
            </div>
            <Footer/>
        </>
    );
}

export default Womens;
