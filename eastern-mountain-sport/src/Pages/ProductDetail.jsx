import { border, Box, Button, Container, Flex, HStack, Image, Select, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postToCart } from '../../Redux/action'
import { useDispatch } from 'react-redux'

export default function ProductDetail() {
  const dispatch = useDispatch()
  const [data, setdata] = useState({})
  const { boolean, id, colorEl, state } = useParams()
  console.log(boolean, id, colorEl, state)
 

  useEffect(() => {
    axios.get(`https://rich-plum-lamb-garb.cyclic.app/Mens/${id}`).then((res) => setdata(res.data))
  }, [])

  console.log(data)
  console.log(data.image, state)
  const [pic, setPic] = useState("")
  let arr = Array(10).fill(0)
  let Fit = ["Standard", "Petite", 'plus']
  return (
    <>
      <div className='Parent_Box'>
        <div className='Child1'>

          <div >
            {
              data.image && data.image.map((el) => (
                <Image _hover={{ border: "1px solid black" }} className='sametypeimage' onClick={() => setPic(el)} src={el} alt="prof" />
              ))
            }
          </div>

          <div>
            {data.image && <Image margin={"auto"} w={"100%"} height={"52%"} src={pic || data.image[0]} alt="prof" />}
          </div>

        </div>


        <Box flexWrap={"true"} display={"flex"} gap={{ lg: "2%", xl: "5%" }} className='child2'>
          <Box w={{ base: "78%", sm: "100%%", lg: "75%", md: "75%", xl: "65%" }}>
            <Flex gap={"9px"} direction={"column"} justifyContent={"start"}>
              <h2 style={{ fontSize: "22px", fontWeight: "400px" }}>{data.name}</h2>
              <Box mt={"0.5rem"}>
                <hr />
              </Box>
              <Text fontSize={"sm"}>${data.price}</Text>
              <Text fontSize={"sm"}>Color</Text>
              {
                <HStack justifyContent={"start"}>
                  {
                    data.color_image && data.color_image.map((el) => (
                      <Image _hover={{ border: "1px solid whitesmoke" }} mt={"3px"} w={"15%"} onClick={() => setPic(el)} src={el} alt="prof" />
                    ))
                  }

                </HStack>
              }
              <Text mb={"14px"} fontSize={"sm"}>Fit*</Text>

              <Flex gap={"4px"}>
                {

                  Fit.map((el, i) =>
                    <Button style={{ padding: "4px" }} className='btn-box'>{el}</Button>
                  )
                }
              </Flex>

              <Text mt={"1rem"} mb={"14px"} fontSize={"sm"}>Size</Text>

              <Flex flexWrap={"wrap"} gap={"3px"}>
                {

                  arr.map((el, i) =>
                    <Button style={{ padding: "4px" }} className='btn-box'>{i + 25}</Button>
                  )
                }
              </Flex>
              <Text mt={"1.5rem"} fontSize={"sm"} style={{ color: "#23395d" }} textDecoration={"underline"}>Size Guide</Text>
              <select>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </Flex>
            <Button onClick={() => dispatch(postToCart(data))} padding={{ base: "2px", sm: "7px" }} color={"white"} backgroundColor={"#536872"} ml={{ base: "1rem", lg: "1rem", sm: "2rem" }} borderRadius={"0px"} w={{ base: "80%", sm: "90%", md: "80%", lg: "70%", xl: "70%" }} fontSize={"sm"} fontWeight={"md"} mt={"1rem"}>

              ADD TO BASKET
            </Button>
          </Box>
        </Box>

      </div>
      <br />
      <h2 style={{ textAlign: "start", marginLeft: "14px", fontWeight: "medium", marginBottom: "8px", marginTop: "8px" }}>Recommended For You</h2>

      <hr style={{ width: "98%", margin: "auto" }} />
      
    </>

  )
}
