import { DialogPageType} from "./store";
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageAC = (newMessage: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessage: newMessage
    } as const
}
export type ActionsDialogsPageType = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>
export const dialogReducer = (state: DialogPageType, action: ActionsDialogsPageType) => {
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