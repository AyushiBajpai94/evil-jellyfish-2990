import { GET_LOGIN_REQ, GET_LOGOUT_REQ } from "./LoginActionType"

const init={
    isAuth:false,
    token:''
}
export const reducer=(state=init,{type,payload})=>{
    switch(type){

        case GET_LOGIN_REQ: return{...state,isAuth:true,token:payload}
        case GET_LOGOUT_REQ: return{...state,isAuth:false}
        default: return state
    }
}