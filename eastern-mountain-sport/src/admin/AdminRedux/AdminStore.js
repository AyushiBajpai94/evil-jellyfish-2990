import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import adminLoginReducer from "./adminLoginReducer";



const mainReducer=combineReducers({
    adminLoginReducer
})


export const AdminStore=legacy_createStore(mainReducer,applyMiddleware(thunk));