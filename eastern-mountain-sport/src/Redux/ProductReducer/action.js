// import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"
import axios  from "axios"
import * as types from "./actionTypes";

export const getProductRequest = () => {
    return {
      type: types.PRODUCT_REQUEST
    };
  };
  
  export const getProductSuccess = (payload) => {
    return {
      type: types.PRODUCT_SUCCESS,
      payload
    };
  };
  
  
  export const getProductFailure = () => {
    return {
      type: types.PRODUCT_FAILURE,
    };
  };
  

//logic for getting the products
export const getProduct = (dispatch) => {
    dispatch(getProductRequest())
    axios.get("https://rich-plum-lamb-garb.cyclic.app/Mens").then((res) => {
        console.log(res.data);
        dispatch(getProductSuccess(res.data))
    }).catch(() => {
        dispatch(getProductFailure())
    })
}

