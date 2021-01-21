import { ActionsTypes, DialogPageType, } from "./state";
import {addPostAC,changeNewTextAC} from "./state";
type  StateType={ newMessageBody: string 
    messages: { id: number; message: string; }[]; }

export const dialogReducer=(state:StateType ,action:ActionsTypes)=>{
    if(action.type ==="UPDATE-NEW-MESSAGE-BODY"){
        state.newMessageBody=action.body;
    } else if(action.type==="SEND-MESSAGE"){
        let body = state.newMessageBody = '';
        state.messages.push({id:new Date().getTime(),message:action.newMessage});
        
    }
    return state;
}
export default dialogReducer;