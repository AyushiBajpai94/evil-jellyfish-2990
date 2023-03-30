import React from 'react';
import { Box } from '@chakra-ui/react'
import styles from "../Styles/Mens.css"

const Mens = () => {
    return (
        <div style={styles}>
            <Box>
                <Box><a href='./'>Home</a></Box>
                <Box id='title'>All Men</Box>
                <Box id='mainbox'>
                 <Box id="firstbox"></Box>
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

                    </Box>
                 </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Mens;
