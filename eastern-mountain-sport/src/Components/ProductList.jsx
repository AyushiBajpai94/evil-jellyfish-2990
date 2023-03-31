import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import styles from "../Styles/ProductList.css"
import ProductCard from "./ProductCard"
import {getProduct} from "../Redux/ProductReducer/action"

const ProductList = () => {
    const dispatch = useDispatch()
    const product = useSelector((store) => store.productReducer.products)
    console.log(product);

    useEffect(() => {
        getProduct(dispatch)
    }, []);

    return (
        <div className='productlists' style={styles}>
            {product.length > 0 && product.map((el) => { return (<ProductCard key={el.id} {...el} />) })}
        </div>
    );
}

export default ProductList;

