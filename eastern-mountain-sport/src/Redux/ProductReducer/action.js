// import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"
import axios  from "axios"
import * as types from "./actionTypes";

export const getProductRequest = () => {
    return {
      type: types.PRODUCT_REQUEST
    };
  };
  
  export const getProductmenSuccess = (payload) => {
    return {
      type: types.MEN_PRODUCT_SUCCESS,
      payload
    };
  };

  export const getProductwomenSuccess = (payload) => {
    return {
      type: types.WOMEN_PRODUCT_SUCCESS,
      payload
    };
  };
  
  
  export const getProductFailure = () => {
    return {
      type: types.PRODUCT_FAILURE,
    };
  };

  const postinCart =(payload)=>{
    return {
      type:types.POST_TO_CART,
      payload
    }
  }
  

//logic for getting the products
export const getProductMens  = (dispatch) => {
    dispatch(getProductRequest())
    axios.get("https://rich-plum-lamb-garb.cyclic.app/Mens").then((res) => {
        console.log(res.data);
        dispatch(getProductmenSuccess(res.data))
    }).catch(() => {
        dispatch(getProductFailure())
    })
}

export const getProductWomens = (dispatch) => {
  dispatch(getProductRequest())
  axios.get("https://rich-plum-lamb-garb.cyclic.app/Womens").then((res) => {
      console.log(res.data);
      dispatch(getProductwomenSuccess(res.data))
  }).catch(() => {
      dispatch(getProductFailure())
  })
}


export const postToCart=(payload)=>async(dispatch)=>{
  axios.post(`https://rich-plum-lamb-garb.cyclic.app/Cart`,payload).then((res)=>(dispatch({type:types.POST_TO_CART,payload}))
 )
}