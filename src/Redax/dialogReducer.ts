import { DialogPageType} from "./store";
let initialState={
    newMessageBody:"",
    dialogs: [{ id: 1, name: "Anna" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Vlad" },
    { id: 4, name: "Lena" },
    { id: 5, name: "Pasha" }],
    messages: [{ id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "YOooo!!!" }]
}
export type  updateNewMessageBodyACType={
    type:string
    body:string
}

export const updateNewMessageBodyAC = (body: string): updateNewMessageBodyACType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageAC = (newMessage: string):any => {
    return {
        type: 'SEND-MESSAGE',
        newMessage: newMessage
    } as const
}
export type ActionsDialogsPageType = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

const dialogReducer = (state: DialogPageType=initialState, action: ActionsDialogsPageType):DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageBody = '';
            state.messages.push({ id: new Date().getTime(), message: action.newMessage });
            return state;
        default:
            return state;
    }
}
export default dialogReducer;