import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import styles from "../Styles/ProductList.css"
import ProductCard from "./ProductCard"
import { getProductMens } from "../Redux/ProductReducer/action"
import { getProductWomens } from "../Redux/ProductReducer/action"
import { useSearchParams, useLocation } from "react-router-dom"


const ProductList = () => {
    const location = useLocation()
    console.log(location);
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const product = useSelector((store) => store.productReducer.mensdata)
    
    console.log(product);

    let obj = {
        params : {
            brand : searchParams.getAll("brand")
        }
    }

    useEffect(() => {
        getProductMens(dispatch, obj)

    }, []);

    useEffect(() => {
        getProductWomens(dispatch)
    }, []);

    return (
        <div className='productlists' style={styles}>
            {product.length > 0 && product.map((el) => { return (<ProductCard key={el.id} {...el} />) })}
        </div>
    );
}

export default ProductList;

