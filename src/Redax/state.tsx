import { type } from "os"

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    NewPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    newMessageBody:string
}

const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            NewPostText: 'it-kamasutra.com',
            posts: [{ id: 1, message: "Hi,how are you?", likeCounts: 44 },
            { id: 1, message: "It my first post", likeCounts: 344 }],

        },
        dialogsPage: {
            dialogs: [{ id: 1, name: "Anna" },
            { id: 2, name: "Anna" },
            { id: 3, name: "Vlad" },
            { id: 4, name: "Lena" },
            { id: 5, name: "Pasha" }],
            messages: [{ id: 1, message: "Hello" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "YOooo!!!" }]
        },
        newMessageBody:""
        
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCounts: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.NewPostText = '';
            this._callSubscriber();    //добавляем посты с помощью renderEntireTree(state)
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.NewPostText = action.newText;
            this._callSubscriber();
        } else if(action.type ==="UPDATE-NEW-MESSAGE-BODY"){
            this._state.newMessageBody=action.body;
            this._callSubscriber();
        } else if(action.type==="SEND-MESSAGE"){
            let body = this._state.newMessageBody = '';
            this._state.dialogsPage.messages.push({id:new Date().getTime(),message:action.newMessage});
            this._callSubscriber();
        }
    }
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}
export const updateNewMessageBodyAC=(body:string)=>{
    return{
        type:'UPDATE-NEW-MESSAGE-BODY',
        body:body
    } as const
}
export const sendMessageAC=(newMessage:string)=>{
    return{
        type:'SEND-MESSAGE',
        newMessage:newMessage
    } as const
}

export default store;

