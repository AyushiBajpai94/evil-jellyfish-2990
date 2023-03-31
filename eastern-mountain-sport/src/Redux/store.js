import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import {reducer as productReducer} from "./ProductReducer/reducer"
import  {adminLoginReducer} from './AdminRedux/adminLoginReducer';
import {dataExractorReducer} from './AdminRedux/adminLoginReducer';

export const rootReducer = combineReducers({
    productReducer,
    adminLoginReducer,
    dataExractorReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))    