// import React, { useState } from "react";
// import { FaSearchLocation, FaShoppingCart, FaRegHeart } from "react-icons/fa"
// import "./Navbar.css"
// import { GiHamburgerMenu } from "react-icons/gi"
// // import img1 from "../images/Untitled design (1).png"
// import { Link } from "react-router-dom";
// import logo from "../Logo/AS-removebg-preview.png"
// export function Navbar(props) {
//     const [showIcons, setShowIcons] = useState(false);
//     const [value, setValue] = useState("");
//     const handlehamburger = () => setShowIcons(!showIcons)
//     return (
//         <>
//             <div className="greendiv">
//                 <div>
//                 <h3 style={{ fontWeight: "555" }}>Rewards | AS Sale | goAdventurus </h3>
//                 </div>
//                 <div>
//                 <Link style={{ fontWeight: "555" }}>Free Ground Shipping over $99 | </Link>
//                 <h3>Find a Store | </h3>
//                 <h3>Help</h3>
//                 </div>
//             </div>
//             {/* <div className="topdiv">
//                 <div>
//                     <Link to="" className="linktopdiv"><FiHelpCircle />   Help</Link>
//                     <Link to="" className="linktopdiv"><FaSearchLocation />   Track Order</Link>

//                 </div>
//                 <div>
//                     <Link to="" className="linktopdiv">Stores</Link>
//                     <Link to="" className="linktopdiv">Bulk Order</Link>
//                     <Link to="" className="linktopdiv">Gift Cards</Link>
//                     <Link to="" className="linktopdiv">UL Services</Link>

//                 </div>
//             </div> */}
//             <nav className="nav">
//                 <Link to="/" className="logofornav" style={{ textDecoration: 'none' }}>

//                     {/* <img src={img1} alt="Logo" /> */}
//                     <div className="h1tag">
//                        <img className="Logo" src={logo} alt="" />

//                     </div>

//                 </Link>

//                 <div className="search">
//                     <input type="text" className="search__input" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
//                     <button type="submit" className="search__button" onSubmit={props.doIt}>
//                         <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
//                             <g>
//                                 <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
//                             </g>
//                         </svg>
//                     </button>

//                 </div>
//                 <div className="iconfornav">
//                     <ul className="ulofnavicon">
//                         <li><Link to="/"><FaRegHeart className="iconcolor" /></Link></li>
//                         <li><Link to="/"><FaSearchLocation className="iconcolor" /></Link></li>
//                         <li><Link to="/CartPage"><FaShoppingCart className="iconcolor" /></Link></li>
                        
//                     </ul>

//                     <div className="hamburger-menu" onClick={handlehamburger}>
//                         <a href="./" onClick={() => setShowIcons(!showIcons)}>
//                             <GiHamburgerMenu />
//                         </a>
//                     </div>
//                 </div>
//             </nav>
           
//         </>
//     )
// }