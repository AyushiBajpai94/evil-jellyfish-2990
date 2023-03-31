import axios from "axios";
import { LoginReq,DataExtractFail,DataExtractReq,DataExtractSucc } from "./AdminActionList"




export const AdminLoginNow=(data)=>async (dispatch)=>{
    if(data.email==='admin' && data.password==='admin'){
        return axios.post('https://reqres.in/api/login',{
            email:'eve.holt@reqres.in',
            password:"cityslicka"
        })
        .then((res)=>{
            // console.log(res);
            if(res.status===200){
                dispatch({type:LoginReq,payload:res.data.token});
            }
        }).catch((err)=>{
            console.log('admin login error');
        })
    }
    // else{
    //     return null;
    // }
}

export const AdminDataNow=(dispatch)=>{
        dispatch({type:DataExtractReq});
            let mainData=[];
            let menCount=0;
            let womenCount=0;
            axios.get('https://rich-plum-lamb-garb.cyclic.app/Womens')
            .then((res)=>{
                // console.log(res);
                mainData.push(...res.data);
                menCount=res.data.length;
                axios.get(`https://rich-plum-lamb-garb.cyclic.app/Womens`)
                .then((res)=>{
                    mainData.push(...res.data);
                    womenCount=res.data.length;
                    // console.log(res.data.length);
                    // console.log(mainData);
                let obj={total:mainData.length,data:mainData,mens:menCount,womens:womenCount}
                dispatch({type:DataExtractSucc,payload:obj});
                })
            }).catch((err)=>{
                console.log('admin data fetching error');
                dispatch({type:DataExtractFail});
            })
}