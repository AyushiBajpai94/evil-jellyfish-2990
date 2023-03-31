import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
} from '@chakra-ui/react';
import styles from "../Styles/ProductList.css"

function ProductCard({ image, name , price, discount, brand }) {
    let img = image[0];
    // console.log(title);
    return (
        <div className='cards' style={styles}>
            <Flex h={400} alignItems="center" justifyContent="center">
                <Box
                    // border={"1px solid red"} 
                    // bg={useColorModeValue('cyan.50', 'gray.800')}
                    borderWidth="1px"
                    // rounded="lg"
                    shadow="sm"
                    position="relative"
                >
                    <Image
                        w={240}
                        h={300}
                        border={"1px solid red"} 
                        // border={"1px solid red"} 
                        padding={"5px"}
                        src={img}
                        alt={"hello"}
                        roundedTop="lg"
                    />

                    <Box p="3" marginTop={0} 
                    //  border={"1px solid red"}
                    >
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                            {/* <Box
                                fontSize="xl"
                                fontWeight="500"
                                as="h5"
                                lineHeight="tight"
                                isTruncated>
                                {brand}
                            </Box> */}
                            {/* <Tooltip
                                label="Add to cart"
                                bg="cyan.50"
                                placement={'top'}
                                color={'gray.800'}
                                fontSize={'1.2em'}>
                                <chakra.a href={'#'} display={'flex'}>
                                    <Icon as={FiShoppingCart} h={6} w={6} alignSelf={'center'} />
                                </chakra.a>
                            </Tooltip> */}
                        </Flex>

                        <Flex justifyContent="space-between" alignContent="center">
                            <Box
                                color={useColorModeValue('gray.600')}
                                fontSize="15px"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                {name}
                            </Box>
                        </Flex>
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
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}

export default ProductCard;