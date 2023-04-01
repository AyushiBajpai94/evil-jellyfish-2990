import { GET_LOGIN_REQ, GET_LOGOUT_REQ } from "./LoginActionType";

export const LoginUser=(token)=>(dispatch)=>{
  
    dispatch({type:GET_LOGIN_REQ,payload:token});
}
export const AdminLogout=(dispatch)=>{
    dispatch({type:GET_LOGOUT_REQ});
}