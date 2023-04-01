import React from 'react';
import { Box, Select, } from "@chakra-ui/react"
import styles from "../Styles/Mens.css"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const Sidebar = () => {
    const [brand, setBrand] = useState([]);  // ["male", "female"]
    const [searchParams, setSearchParams] = useSearchParams()


    const handleChange = (e) => {
        let newbrand = [...brand]
        const value = e.target.value

        if (newbrand.includes(value)) {
            newbrand = newbrand.filter((el) => el !== value)
        } else {
            newbrand.push(value)
        }
        setBrand(newbrand)
        console.log(brand);
    }

    useEffect(() => {
        const params = {
            brand
        }
        setSearchParams(params)
    }, [brand]);
    return (
        <div>
            <Box id="firstbox">
                <Box id='title1'>Filter By</Box>
                <hr style={{ marginTop: "5px" }} />
                <Box id="filterbox">
                    <h2 id='title1'>All Men</h2>
                    <div>
                        <Select border={"none"} w={{ lg: "98%" }} mt={"8px"}>
                            <option>Men's Jackets</option>
                        </Select>
                        <Select border={"none"} w={{ lg: "98%" }} mt={"8px"}>
                            <option>Men's Clothes</option>
                        </Select>
                        <Select border={"none"} w={{ lg: "98%" }} mt={"8px"}>
                            <option>Men's Shoes</option>
                        </Select>
                        <Select border={"none"} w={{ lg: "98%" }} mt={"8px"}>
                            <option>Men's Accessories</option>
                        </Select>
                    </div>
                </Box>
                <hr style={{ marginTop: "5px" }} />
                <Box id="filterbox1">
                    <h2 id='title1'>BRAND</h2>
                    <div style={styles} >
                        <div className='inp'>
                            <input type="checkbox" value={"ADIDAS"} onChange={handleChange} />
                            <label >ADIDAS (9)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"BUFF"} onChange={handleChange} />
                            <label >BUFF (6)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"EMS"} onChange={handleChange} />
                            <label >EMS (8)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"LEVIS"} onChange={handleChange} />
                            <label >LEVI'S (7)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"ADIDAS"} onChange={handleChange} />
                            <label >ADIDAS SALES INC.
                                (1)
                            </label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"BIRDS"} onChange={handleChange} />
                            <label >ALL BIRDS
                                (4)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"ALTRA"} onChange={handleChange} />
                            <label >ALTRA
                                (4)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"ASICS"} onChange={handleChange} />
                            <label >ASICS AMERICA
                                (2)</label>
                        </div>
                    </div>
                </Box>
                <hr style={{ marginTop: "5px" }} />
                <Box id="filterbox2">
                    <h2 id='title1'>COLOR</h2>
                    <div style={styles} id="colorfilter" >
                        <Box>
                            <div className='inp1'>
                                <input type="checkbox" value={"black"} onChange={handleChange} />
                                <label >Black (12)</label>
                            </div>
                            <div className='inp1'>
                                <input type="checkbox" value={"blue"} onChange={handleChange} />
                                <label >Blue (16)</label>
                            </div>
                            <div className='inp1'>
                                <input type="checkbox" value={"red"} onChange={handleChange} />
                                <label >Red (8)</label>
                            </div>
                            <div className='inp1'>
                                <input type="checkbox" value={"green"} onChange={handleChange} />
                                <label >Green (27)</label>
                            </div>
                        </Box>
                        <Box>
                            <div className='inp1'>
                                <input type="checkbox" value={"white"} onChange={handleChange} />
                                <label >White
                                    (19)
                                </label>
                            </div>
                            <div className='inp1'>
                                <input type="checkbox" value={"yellow"} onChange={handleChange} />
                                <label >Yellow
                                    (41)</label>
                            </div>
                            <div className='inp1'>
                                <input type="checkbox" value={"purple"} onChange={handleChange} />
                                <label >Purple
                                    (14)</label>
                            </div>
                            <div className='inp1'>
                                <input type="checkbox" value={"orange"} onChange={handleChange} />
                                <label >Orange
                                    (26)</label>
                            </div>
                        </Box>
                    </div>
                </Box>
                <hr style={{ marginTop: "5px" }} />
                <Box>
                    <h2 id='title1'>GENDER</h2>
                    <div style={styles} >
                        <div className='inp'>
                            <input type="checkbox" value={"mens"} onChange={handleChange} />
                            <label >Mens (2215)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"unisex"} onChange={handleChange} />
                            <label >Unisex (216)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"womens"} onChange={handleChange} />
                            <label >Womens (8)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"mens&unisex"} onChange={handleChange} />
                            <label >Mens, Unisex (7)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"mens"} onChange={handleChange} />
                            <label >Mens,Womens
                                (1)
                            </label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"BIRDS"} onChange={handleChange} />
                            <label >Mens, Unisex, Womens
                                (4)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"ALTRA"} onChange={handleChange} />
                            <label >Womens
                                (4)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"ASICS"} onChange={handleChange} />
                            <label >Mens, Womens
                                (2)</label>
                        </div>
                    </div>
                </Box>
                <hr style={{ marginTop: "5px" }} />
                <Box>
                    <h2 id='title1'>SIZE</h2>
                    <div style={styles} >
                        <div className='inp'>
                            <input type="checkbox" value={"mens"} onChange={handleChange} />
                            <label >L  (2215)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"unisex"} onChange={handleChange} />
                            <label >M  (2216)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"womens"} onChange={handleChange} />
                            <label >XL  (849)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"womens"} onChange={handleChange} />
                            <label >2XL  (159)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"womens"} onChange={handleChange} />
                            <label >3XL (522)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"mens&unisex"} onChange={handleChange} />
                            <label >S  (716)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"mens"} onChange={handleChange} />
                            <label >9
                                (571)
                            </label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"BIRDS"} onChange={handleChange} />
                            <label >10
                                (469)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"ALTRA"} onChange={handleChange} />
                            <label >11
                                (455)</label>
                        </div>
                        <div className='inp'>
                            <input type="checkbox" value={"ASICS"} onChange={handleChange} />
                            <label >12
                                (412)</label>
                        </div>
                    </div>
                </Box>
                <hr style={{ marginTop: "5px" }} />

            </Box>
        </div>
    );
}

export default Sidebar;
