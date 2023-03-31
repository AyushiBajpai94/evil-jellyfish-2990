import { DataExtractFail, DataExtractReq, DataExtractSucc, LoginReq, Logout } from "./AdminActionList";

const init={
    isAuth:false,
    token:''
};

export function adminLoginReducer(state=init,action){
    switch(action.type){
        case LoginReq:
            return{
                ...state,
                isAuth:true,
                token:action.payload
            }
        case Logout:
            return{
                ...state,
                isAuth:false,
                token:''
            }    
        default:
            return state;
    }
}

const data={
    isLoading:false,
    isError:false,
    totalData:0,
    data:[],
    mensData:0,
    womensData:0
}

export function dataExractorReducer(state=data,action){
    switch(action.type){
        case DataExtractReq:
            return{
                ...state,
                isLoading:true,
                isError:false,
                totalData:0,
                data:[],
                mensData:0,
                womensData:0
            }
        case DataExtractSucc:
            return{
                ...state,
                isLoading:false,
                isError:false,
                totalData:action.payload.total,
                data:action.payload.data,
                mensData:action.payload.mens,
                womensData:action.payload.womens
            } 
        case DataExtractFail:
            return{
                ...state,
                isLoading:false,
                isError:true,
                totalData:0,
                data:[],
                mensData:0,
                womensData:0
            }     
        default:
            return state;
    }
}