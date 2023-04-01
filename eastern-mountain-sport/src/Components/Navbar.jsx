import "./Navbar.css";
import {FaUserAlt,FaShoppingCart} from "react-icons/fa"

//import logo from "./logo1.png"
import {Text, Box,Image, Input,Flex} from "@chakra-ui/react"
//import logo1 from "../components/logo1"
import logo from "./AS-removebg-preview-2.png";
import { Link } from "react-router-dom";
 
function Navbar(){




    return(
            <>
                           
        <Box display="flex"  justifyContent="space-between" px="20px" color="white" bgColor="#313F35">
            <Box>
                <a href="/">Rewards</a>|
                <a href="/">EMS Schools</a>|
                <a href="/">goEast</a>
            </Box>
            <Box>
                <a href="/">Your cart qualifies for Free Ground Shipping</a>|
                <a href="/">Find a Store</a>|
                <a href="/">HELP</a>
            </Box>
        </Box>
        <Box display="flex"  justifyContent="space-evenly" padding={"10px 10px"} border="1px solid black">
           
           {/* <Image   /> */}
           <img className="image"  src={logo} alt="" />
            <Box><Input marginTop={"30px"} marginLeft={"-8rem"} width='800px' size='md' focusBorderColor='pink.400'
    placeholder='Search...'/></Box>
        <Link to={"/login"}> <Text marginTop={"30px"} fontSize='xl'> <FaUserAlt/> My Accounts</Text> </Link> 
          <Link to={"/cart"}> <Text marginTop={"30px"} fontSize='xl'> <FaShoppingCart/>Cart</Text> </Link>
        </Box> 
      <Flex justifyContent="space-evenly" bgColor="#fff" border="1px solid black">
      <div class="nav2">
            <nav class="menu">
                <ul class="menu-main">
                   
                    <li class="menu-item-has-children">
                        <a href="/">MEN</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">JACKETS</h4>
                                <ul>
                                    <li><a href="/">Down Jackets</a></li>
                                    <li><a href="/">Fleece Jackets</a></li>
                                    <li><a href="/">Rain Jackets</a></li>
                                    <li><a href="/">Snow Jackets</a></li>
                                    <li><a href="/">Ski Jackets</a></li>
                                    <li><a href="/">Puffer Jackets</a></li>
                                    <li><a href="/">WindBreakers</a></li>
                                    <li><a href="/">Vests</a></li>
                                </ul>
                                <h4 class="title">BOTTOMS</h4>
                                <ul>
                                    <li><a href="/">Pants</a></li>
                                    <li><a href="/">Shorts</a></li>
                                    <li><a href="/">Cycling Shorts</a></li>
                                    <li><a href="/">Biking Pants</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">TOPS</h4>
                                <ul>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Graphic Tees</a></li>
                                    <li><a href="/">Hoodies</a></li>
                                    <li><a href="/">SweatShirts</a></li>
                                    <li><a href="/">Sweaters</a></li>
                                    <li><a href="/">Polos</a></li>
                                </ul>
                                <h4 class="title">BASE LAYER</h4>
                                <ul>
                                    <li><a href="/">HBrief and Boxers</a></li>
                                    <li><a href="/">Base Layer Tops</a></li>
                                    <li><a href="/">SBase Layer Bottoms</a></li>
                                   
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">HATS</h4>
                                <ul>
                                    <li><a href="/">Baseball Caps</a></li>
                                    <li><a href="/">Sun Hats</a></li>
                                    <li><a href="/">Bucket Hats</a></li>
                                    <li><a href="/">Beanies</a></li>
                                    <li><a href="/">Gloves and Mittens</a></li>
                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                    <li><a href="/">Sunglasses</a></li>
                                    <li><a href="/">Watches</a></li>
                                    <li><a href="/">Face Masks</a></li>
                                </ul>
                               
                            </div>
                            <div class="list-item">
                                <h4 class="title">SHOES</h4>
                                <ul>
                                    <li><a href="/">Casual Shoes</a></li>
                                    <li><a href="/">Hiking Shoes</a></li>
                                    <li><a href="/">Running Shoes</a></li>
                                    <li><a href="/">Gym Shoes</a></li>
                                    <li><a href="/">Boat Shoes</a></li>
                                    <li><a href="/">Slippers</a></li>
                                    <li><a href="/">Casual Sandals</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </li>
                    
                    <li class="menu-item-has-children">
                        <a href="/">WOMEN</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">JACKETS</h4>
                                <ul>
                                    <li><a href="/">Down Jackets</a></li>
                                    <li><a href="/">Fleece Jackets</a></li>
                                    <li><a href="/">Rain Jackets</a></li>
                                    <li><a href="/">Snow Jackets</a></li>
                                    <li><a href="/">Ski Jackets</a></li>
                                    <li><a href="/">Puffer Jackets</a></li>
                                    <li><a href="/">WindBreakers</a></li>
                                    <li><a href="/">Vests</a></li>
                                </ul>
                                <h4 class="title">BOTTOMS</h4>
                                <ul>
                                    <li><a href="/">Pants</a></li>
                                    <li><a href="/">Leggings</a></li>
                                    <li><a href="/">Capries</a></li>
                                    <li><a href="/">Skirts</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">TOPS</h4>
                                <ul>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Graphic Tees</a></li>
                                    <li><a href="/">Hoodies</a></li>
                                    <li><a href="/">SweatShirts</a></li>
                                    <li><a href="/">Sweaters</a></li>
                                    <li><a href="/">Polos</a></li>
                                </ul>
                                <h4 class="title">BASE LAYER</h4>
                                <ul>
                                    <li><a href="/">Panties</a></li>
                                    <li><a href="/">Sports Bra</a></li>
                                    <li><a href="/">Base Layer Tops</a></li>
                                    <li><a href="/">Base Layer Bottoms</a></li>
                                   
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">HATS</h4>
                                <ul>
                                    <li><a href="/">Baseball Caps</a></li>
                                    <li><a href="/">Sun Hats</a></li>
                                    <li><a href="/">Bucket Hats</a></li>
                                    <li><a href="/">Beanies</a></li>
                                    <li><a href="/">Gloves and Mittens</a></li>
                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                    <li><a href="/">Sunglasses</a></li>
                                    <li><a href="/">Watches</a></li>
                                    <li><a href="/">Face Masks</a></li>
                                </ul>
                               
                            </div>
                            <div class="list-item">
                                <h4 class="title">SHOES</h4>
                                <ul>
                                    <li><a href="/">Casual Shoes</a></li>
                                    <li><a href="/">Hiking Shoes</a></li>
                                    <li><a href="/">Running Shoes</a></li>
                                    <li><a href="/">Gym Shoes</a></li>
                                    <li><a href="/">Boat Shoes</a></li>
                                    <li><a href="/">Slippers</a></li>
                                    <li><a href="/">Casual Sandals</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </li>
                   
                    <li class="menu-item-has-children">
                        <a href="/">KIDS</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">Boy's Clothing</h4>
                                <ul>
                                    <li><a href="/">Jackets</a></li>
                                    <li><a href="/">Hoodies & Sweatshirts</a></li>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Pants</a></li>
                                    <li><a href="/">Shorts</a></li>
                                    <li><a href="/">Underwear</a></li>
                                </ul>
                                <h4 class="title">Girl's Clothing</h4>
                                <ul>
                                    <li><a href="/">Jackets</a></li>
                                    <li><a href="/">Hoodies & Sweatshirts</a></li>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Pants and Capris</a></li>
                                    <li><a href="/">Shorts</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">Kid's Shoes</h4>
                                <ul>
                                    <li><a href="/">Casual Shoes</a></li>
                                    <li><a href="/">Hiking Shoes</a></li>
                                    <li><a href="/">Running Shoes</a></li>
                                    <li><a href="/">Sandals</a></li>
                                </ul>
                                <h4 class="title">Kid's Boots</h4>
                                <ul>
                                    <li><a href="/">Hiking Boots</a></li>                                    
                                    <li><a href="/">Winter Boots</a></li>
                                    <li><a href="/">Casual Boots</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </li>
                  
                    <li class="menu-item-has-children">
                        <a href="/">FOOTWEAR</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">MEN'S SHOES & BOOTS</h4>
                                <ul>
                                    <li><a href="/">Center Fire Pistol</a></li>
                                    <li><a href="/">Center Fire Rifles</a></li>
                                    <li><a href="/">Rim Fire Rifles</a></li>
                                    <li><a href="/">Fly Jackets</a></li>
                                    <li><a href="/">Shot Guns</a></li>
                                    <li><a href="/">MK 364</a></li>
                                    <li><a href="/">Rk 92 Led</a></li>
                                </ul>
                                <h4 class="title">CUSTOMER FAVOURITES</h4>
                                <ul>
                                    <li><a href="/">Handgun Ammo</a></li>
                                    <li><a href="/">Centerfire Ammo</a></li>
                                    <li><a href="/">Rimfire Ammo</a></li>
                                    <li><a href="/">Shotcell Ammo</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">WOMEN'S SHOES</h4>
                                <ul>
                                    <li><a href="/">Binocular</a></li>
                                    <li><a href="/">Scopes</a></li>
                                    <li><a href="/">Range Finders</a></li>
                                    <li><a href="/">Spotting Scopes</a></li>
                                </ul>
                                <h4 class="title">SHOE & BOOT ACCESSORIES</h4>
                                <ul>
                                    <li><a href="/">Hard Bait</a></li>
                                    <li><a href="/">Soft Bait </a></li>
                                    <li><a href="/">Spinner Baits</a></li>
                                    <li><a href="/">Buzzbaits</a></li>
                                    <li><a href="/">Jigs</a></li>
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">WADERS ACCESSORIES</h4>
                                <ul>
                                    <li><a href="/">Tools & Pilers</a></li>
                                    <li><a href="/">Fillet Knives</a></li>
                                    <li><a href="/">Fillet Tables</a></li>
                                    <li><a href="/">Rod Holders & Racks</a></li>
                                    <li><a href="/">Fishing Line</a></li>
                                    <li><a href="/">Fish Hooks</a></li>
                                    <li><a href="/">Tackle Boxes</a></li>
                                    <li><a href="/">Tackle Bags</a></li>
                                    <li><a href="/">Utility Box</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                 
                    <li class="menu-item-has-children">
                        <a href="/">CAMP&HIKE</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">TENTS</h4>
                                <ul>
                                    <li><a href="/">Camping Tents</a></li>
                                    <li><a href="/">Fire Tents</a></li>
                                    <li><a href="/">Rim Fire </a></li>
                                    <li><a href="/">Fly Jackets</a></li>
                                    <li><a href="/">Campaign Tents</a></li>
                                    <li><a href="/">Army Tents</a></li>
                                    <li><a href="/">Camping Jackets</a></li>
                                </ul>
                                <h4 class="title">CAMP ESSENTIALS</h4>
                                <ul>
                                    <li><a href="/">Handgun Ammo</a></li>
                                    <li><a href="/">Centerfire Ammo</a></li>
                                    <li><a href="/">Rimfire Ammo</a></li>
                                    <li><a href="/">Shotcell Ammo</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">CAMP KITCHEN</h4>
                                <ul>
                                    <li><a href="/">Binocular</a></li>
                                    <li><a href="/">Scopes</a></li>
                                    <li><a href="/">Range Finders</a></li>
                                    <li><a href="/">Spotting Scopes</a></li>
                                </ul>
                                <h4 class="title">SLEEPING GEAR</h4>
                                <ul>
                                    <li><a href="/">Hard Bait</a></li>
                                    <li><a href="/">Soft Bait </a></li>
                                    <li><a href="/">Spinner Baits</a></li>
                                    <li><a href="/">Buzzbaits</a></li>
                                    <li><a href="/">Jigs</a></li>
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">PACKS & BAGS</h4>
                                <ul>
                                    <li><a href="/">Tools & Pilers</a></li>
                                    <li><a href="/">Fillet Knives</a></li>
                                    <li><a href="/">Fillet Tables</a></li>
                                    <li><a href="/">Rod Holders & Racks</a></li>
                                    <li><a href="/">Fishing Line</a></li>
                                    <li><a href="/">Fish Hooks</a></li>
                                    <li><a href="/">Tackle Boxes</a></li>
                                    <li><a href="/">Tackle Bags</a></li>
                                    <li><a href="/">Utility Box</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                   
                    <li class="menu-item-has-children">
                        <a href="/">CLIMB</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">JACKETS</h4>
                                <ul>
                                    <li><a href="/">Down Jackets</a></li>
                                    <li><a href="/">Fleece Jackets</a></li>
                                    <li><a href="/">Rain Jackets</a></li>
                                    <li><a href="/">Snow Jackets</a></li>
                                    <li><a href="/">Ski Jackets</a></li>
                                    <li><a href="/">Puffer Jackets</a></li>
                                    <li><a href="/">WindBreakers</a></li>
                                    <li><a href="/">Vests</a></li>
                                </ul>
                                <h4 class="title">BOTTOMS</h4>
                                <ul>
                                    <li><a href="/">Pants</a></li>
                                    <li><a href="/">Shorts</a></li>
                                    <li><a href="/">Cycling Shorts</a></li>
                                    <li><a href="/">Biking Pants</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">TOPS</h4>
                                <ul>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Graphic Tees</a></li>
                                    <li><a href="/">Hoodies</a></li>
                                    <li><a href="/">SweatShirts</a></li>
                                    <li><a href="/">Sweaters</a></li>
                                    <li><a href="/">Polos</a></li>
                                </ul>
                                <h4 class="title">BASE LAYER</h4>
                                <ul>
                                    <li><a href="/">HBrief and Boxers</a></li>
                                    <li><a href="/">Base Layer Tops</a></li>
                                    <li><a href="/">SBase Layer Bottoms</a></li>
                                   
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">HATS</h4>
                                <ul>
                                    <li><a href="/">Baseball Caps</a></li>
                                    <li><a href="/">Sun Hats</a></li>
                                    <li><a href="/">Bucket Hats</a></li>
                                    <li><a href="/">Beanies</a></li>
                                    <li><a href="/">Gloves and Mittens</a></li>
                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                    <li><a href="/">Sunglasses</a></li>
                                    <li><a href="/">Watches</a></li>
                                    <li><a href="/">Face Masks</a></li>
                                </ul>
                               
                            </div>
                            <div class="list-item">
                                <h4 class="title">SHOES</h4>
                                <ul>
                                    <li><a href="/">Casual Shoes</a></li>
                                    <li><a href="/">Hiking Shoes</a></li>
                                    <li><a href="/">Running Shoes</a></li>
                                    <li><a href="/">Gym Shoes</a></li>
                                    <li><a href="/">Boat Shoes</a></li>
                                    <li><a href="/">Slippers</a></li>
                                    <li><a href="/">Casual Sandals</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </li>
                   
                    <li class="menu-item-has-children">
                        <a href="/">SNOW</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">JACKETS</h4>
                                <ul>
                                    <li><a href="/">Down Jackets</a></li>
                                    <li><a href="/">Fleece Jackets</a></li>
                                    <li><a href="/">Rain Jackets</a></li>
                                    <li><a href="/">Snow Jackets</a></li>
                                    <li><a href="/">Ski Jackets</a></li>
                                    <li><a href="/">Puffer Jackets</a></li>
                                    <li><a href="/">WindBreakers</a></li>
                                    <li><a href="/">Vests</a></li>
                                </ul>
                                <h4 class="title">BOTTOMS</h4>
                                <ul>
                                    <li><a href="/">Pants</a></li>
                                    <li><a href="/">Shorts</a></li>
                                    <li><a href="/">Cycling Shorts</a></li>
                                    <li><a href="/">Biking Pants</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">TOPS</h4>
                                <ul>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Graphic Tees</a></li>
                                    <li><a href="/">Hoodies</a></li>
                                    <li><a href="/">SweatShirts</a></li>
                                    <li><a href="/">Sweaters</a></li>
                                    <li><a href="/">Polos</a></li>
                                </ul>
                                <h4 class="title">BASE LAYER</h4>
                                <ul>
                                    <li><a href="/">HBrief and Boxers</a></li>
                                    <li><a href="/">Base Layer Tops</a></li>
                                    <li><a href="/">SBase Layer Bottoms</a></li>
                                   
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">HATS</h4>
                                <ul>
                                    <li><a href="/">Baseball Caps</a></li>
                                    <li><a href="/">Sun Hats</a></li>
                                    <li><a href="/">Bucket Hats</a></li>
                                    <li><a href="/">Beanies</a></li>
                                    <li><a href="/">Gloves and Mittens</a></li>
                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                    <li><a href="/">Sunglasses</a></li>
                                    <li><a href="/">Watches</a></li>
                                    <li><a href="/">Face Masks</a></li>
                                </ul>
                               
                            </div>
                            <div class="list-item">
                                <h4 class="title">SHOES</h4>
                                <ul>
                                    <li><a href="/">Casual Shoes</a></li>
                                    <li><a href="/">Hiking Shoes</a></li>
                                    <li><a href="/">Running Shoes</a></li>
                                    <li><a href="/">Gym Shoes</a></li>
                                    <li><a href="/">Boat Shoes</a></li>
                                    <li><a href="/">Slippers</a></li>
                                    <li><a href="/">Casual Sandals</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </li>
                    
                    <li class="menu-item-has-children">
                        <a href="/">CYCLE</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">JACKETS</h4>
                                <ul>
                                    <li><a href="/">Down Jackets</a></li>
                                    <li><a href="/">Fleece Jackets</a></li>
                                    <li><a href="/">Rain Jackets</a></li>
                                    <li><a href="/">Snow Jackets</a></li>
                                    <li><a href="/">Ski Jackets</a></li>
                                    <li><a href="/">Puffer Jackets</a></li>
                                    <li><a href="/">WindBreakers</a></li>
                                    <li><a href="/">Vests</a></li>
                                </ul>
                                <h4 class="title">BOTTOMS</h4>
                                <ul>
                                    <li><a href="/">Pants</a></li>
                                    <li><a href="/">Shorts</a></li>
                                    <li><a href="/">Cycling Shorts</a></li>
                                    <li><a href="/">Biking Pants</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">TOPS</h4>
                                <ul>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Graphic Tees</a></li>
                                    <li><a href="/">Hoodies</a></li>
                                    <li><a href="/">SweatShirts</a></li>
                                    <li><a href="/">Sweaters</a></li>
                                    <li><a href="/">Polos</a></li>
                                </ul>
                                <h4 class="title">BASE LAYER</h4>
                                <ul>
                                    <li><a href="/">HBrief and Boxers</a></li>
                                    <li><a href="/">Base Layer Tops</a></li>
                                    <li><a href="/">SBase Layer Bottoms</a></li>
                                   
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">HATS</h4>
                                <ul>
                                    <li><a href="/">Baseball Caps</a></li>
                                    <li><a href="/">Sun Hats</a></li>
                                    <li><a href="/">Bucket Hats</a></li>
                                    <li><a href="/">Beanies</a></li>
                                    <li><a href="/">Gloves and Mittens</a></li>
                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                    <li><a href="/">Sunglasses</a></li>
                                    <li><a href="/">Watches</a></li>
                                    <li><a href="/">Face Masks</a></li>
                                </ul>
                               
                            </div>
                            <div class="list-item">
                                <h4 class="title">SHOES</h4>
                                <ul>
                                    <li><a href="/">Casual Shoes</a></li>
                                    <li><a href="/">Hiking Shoes</a></li>
                                    <li><a href="/">Running Shoes</a></li>
                                    <li><a href="/">Gym Shoes</a></li>
                                    <li><a href="/">Boat Shoes</a></li>
                                    <li><a href="/">Slippers</a></li>
                                    <li><a href="/">Casual Sandals</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </li>
                    
                    <li class="menu-item-has-children">
                        <a href="/">ACTIVITY</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">JACKETS</h4>
                                <ul>
                                    <li><a href="/">Down Jackets</a></li>
                                    <li><a href="/">Fleece Jackets</a></li>
                                    <li><a href="/">Rain Jackets</a></li>
                                    <li><a href="/">Snow Jackets</a></li>
                                    <li><a href="/">Ski Jackets</a></li>
                                    <li><a href="/">Puffer Jackets</a></li>
                                    <li><a href="/">WindBreakers</a></li>
                                    <li><a href="/">Vests</a></li>
                                </ul>
                                <h4 class="title">BOTTOMS</h4>
                                <ul>
                                    <li><a href="/">Pants</a></li>
                                    <li><a href="/">Shorts</a></li>
                                    <li><a href="/">Cycling Shorts</a></li>
                                    <li><a href="/">Biking Pants</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">TOPS</h4>
                                <ul>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Graphic Tees</a></li>
                                    <li><a href="/">Hoodies</a></li>
                                    <li><a href="/">SweatShirts</a></li>
                                    <li><a href="/">Sweaters</a></li>
                                    <li><a href="/">Polos</a></li>
                                </ul>
                                <h4 class="title">BASE LAYER</h4>
                                <ul>
                                    <li><a href="/">HBrief and Boxers</a></li>
                                    <li><a href="/">Base Layer Tops</a></li>
                                    <li><a href="/">SBase Layer Bottoms</a></li>
                                   
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">HATS</h4>
                                <ul>
                                    <li><a href="/">Baseball Caps</a></li>
                                    <li><a href="/">Sun Hats</a></li>
                                    <li><a href="/">Bucket Hats</a></li>
                                    <li><a href="/">Beanies</a></li>
                                    <li><a href="/">Gloves and Mittens</a></li>
                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                    <li><a href="/">Sunglasses</a></li>
                                    <li><a href="/">Watches</a></li>
                                    <li><a href="/">Face Masks</a></li>
                                </ul>
                               
                            </div>
                            <div class="list-item">
                                <h4 class="title">SHOES</h4>
                                <ul>
                                    <li><a href="/">Casual Shoes</a></li>
                                    <li><a href="/">Hiking Shoes</a></li>
                                    <li><a href="/">Running Shoes</a></li>
                                    <li><a href="/">Gym Shoes</a></li>
                                    <li><a href="/">Boat Shoes</a></li>
                                    <li><a href="/">Slippers</a></li>
                                    <li><a href="/">Casual Sandals</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </li>
                   
                    <li class="menu-item-has-children">
                        <a href="/">BRAND</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item">
                                <h4 class="title">JACKETS</h4>
                                <ul>
                                    <li><a href="/">Down Jackets</a></li>
                                    <li><a href="/">Fleece Jackets</a></li>
                                    <li><a href="/">Rain Jackets</a></li>
                                    <li><a href="/">Snow Jackets</a></li>
                                    <li><a href="/">Ski Jackets</a></li>
                                    <li><a href="/">Puffer Jackets</a></li>
                                    <li><a href="/">WindBreakers</a></li>
                                    <li><a href="/">Vests</a></li>
                                </ul>
                                <h4 class="title">BOTTOMS</h4>
                                <ul>
                                    <li><a href="/">Pants</a></li>
                                    <li><a href="/">Shorts</a></li>
                                    <li><a href="/">Cycling Shorts</a></li>
                                    <li><a href="/">Biking Pants</a></li>
                                </ul>
                            </div>

                            <div class="list-item">
                                <h4 class="title">TOPS</h4>
                                <ul>
                                    <li><a href="/">Shirts</a></li>
                                    <li><a href="/">Graphic Tees</a></li>
                                    <li><a href="/">Hoodies</a></li>
                                    <li><a href="/">SweatShirts</a></li>
                                    <li><a href="/">Sweaters</a></li>
                                    <li><a href="/">Polos</a></li>
                                </ul>
                                <h4 class="title">BASE LAYER</h4>
                                <ul>
                                    <li><a href="/">HBrief and Boxers</a></li>
                                    <li><a href="/">Base Layer Tops</a></li>
                                    <li><a href="/">SBase Layer Bottoms</a></li>
                                   
                                </ul>
                            </div>
                            <div class="list-item">
                                <h4 class="title">HATS</h4>
                                <ul>
                                    <li><a href="/">Baseball Caps</a></li>
                                    <li><a href="/">Sun Hats</a></li>
                                    <li><a href="/">Bucket Hats</a></li>
                                    <li><a href="/">Beanies</a></li>
                                    <li><a href="/">Gloves and Mittens</a></li>
                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                    <li><a href="/">Sunglasses</a></li>
                                    <li><a href="/">Watches</a></li>
                                    <li><a href="/">Face Masks</a></li>
                                </ul>
                               
                            </div>
                            <div class="list-item">
                                <h4 class="title">SHOES</h4>
                                <ul>
                                    <li><a href="/">Casual Shoes</a></li>
                                    <li><a href="/">Hiking Shoes</a></li>
                                    <li><a href="/">Running Shoes</a></li>
                                    <li><a href="/">Gym Shoes</a></li>
                                    <li><a href="/">Boat Shoes</a></li>
                                    <li><a href="/">Slippers</a></li>
                                    <li><a href="/">Casual Sandals</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>

        </div>
    </Flex>



      




    </>




    )
}

export default Navbar;