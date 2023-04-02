import { MEN_PRODUCT_SUCCESS, POST_TO_CART, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS, WOMEN_PRODUCT_SUCCESS } from "./actionTypes";
import CartPage from "../../Pages/CartPage/CartPage";

const initialState = {
    isLoading: false,
    isError: false,
    // products: [],
    mensdata : [],
    womensdata : [],
    Cart: []
}

export const reducer = (state = initialState, { type, payload }) => {
    // console.log("payload",payload)
    switch (type) {
        case PRODUCT_REQUEST:
            return { ...state, isLoading: true }
        case MEN_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, mensdata: payload }
        case WOMEN_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, womensdata: payload }
        case PRODUCT_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case POST_TO_CART:
            return { ...state, CartPage: [payload] }
        default: return state;
    }
}

