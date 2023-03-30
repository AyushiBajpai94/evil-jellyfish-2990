import { LoginReq } from "./AdminActionList";

const init={
    isAuth:false
};

export default function adminLoginReducer(state=init,action){
    switch(action.type){
        case LoginReq:
            return{
                ...state,
                isAuth:true
            }
        default:
            return state;
    }
}