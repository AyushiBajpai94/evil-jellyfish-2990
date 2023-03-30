import { LoginReq } from "./AdminActionList"



export const AdminLoginNow=(data)=>(dispatch)=>{
    if(data.email==='admin' && data.password==='admin'){
        dispatch({type:LoginReq,payload:data});
    }
}