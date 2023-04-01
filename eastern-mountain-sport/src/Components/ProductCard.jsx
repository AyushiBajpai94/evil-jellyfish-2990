import styles from "../Styles/ProductList.css"
import { border, Box, Button, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/productpage.css"

export default function ProductCard({ name, image, price, color_image, id, nots, discount }) {
    // console.log(id);
    const [state, setState] = useState(0)
    const [boolean, setboolean] = useState(true)
    const [colorEl, setcolorEl] = useState("not")
    // console.log(colorEl)

    const HandleColorImage = (el) => {
        setboolean(false)
        setcolorEl(el)
    }
    return (
        <Container className='cards' style={styles} paddingLeft={"5px"} fontSize={"md"} fontFamily={"monospace"} cursor={"pointer"}>
            <Box h={400} background={"white"} alignItems="center" justifyContent="center" borderWidth="1px" shadow="sm">
                <Link to={`/productdetail/${id}/${colorEl}/${boolean}/${state}`}>

                    <Image  h={280} w={260} margin={"auto"} src={boolean ? image[state] : colorEl}
                        onMouseOut={() => setState(0)}

                        onMouseMoveCapture={() => (
                            setState((prev) => {
                                if (prev < image.length - 1) {
                                    return prev + 1
                                } else {
                                    return prev - image.length + 1
                                }
                            }

                            )
                        )}

                        onTouchMove={() => (
                            setState((prev) => {
                                if (prev < image.length - 1) {
                                    return prev + 1
                                } else {
                                    return prev - image.length + 1
                                }
                            }

                            )
                        )}

                        onTouchEnd={() => setState(0)}
                        alt="prof" />
                </Link>



                <Box fontSize={"sm"} width={"98%"} margin={"auto"} mt={"10px"} justifyContent={"space-between"} display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}>

                    <Box fontSize={"sm"} width={"98%"} margin={"auto"} mt={"4px"} display={"inline-flex"} gap={"8px"}>

                        {
                            nots === undefined && color_image.map((el, i) => {
                                return (
                                    <Image h={"40px"} onClick={() => HandleColorImage(el)} borderInlineEndColor={"white"} _hover={{ border: "1px solid black" }} aria-selected={"true"} w={"30%"}
                                        border={"3px solid whiite"}
                                        src={el}></Image>
                                )
                            })

                        }
                    </Box>
                    {nots === undefined && <Box textAlign={"End"}>
                        <Text mt={"0.6rem"} mr={"5px"}>
                            {color_image.length} color
                        </Text>
                    </Box>
                    }
                </Box>
                <Text fontSize="15px" width={"98%"} margin={"auto"} mt={"13px"} noOfLines={"1"} textAlign={'start'} as={'h2'}>{name}</Text>
                {nots === undefined &&

                    <Flex alignContent="center">
                        <Box fontSize="15px"
                            fontWeight="bold"
                            as="h6"
                            color={"red"}
                            marginRight={"7px"}
                            lineHeight="tight">
                            ${price}
                        </Box>
                        <Box as="span" color={'green'} fontWeight="500" fontSize="13px">
                            {` Up to ${discount}% off `}
                        </Box>
                    </Flex>
                }

            </Box>
        </Container>
    )
}
