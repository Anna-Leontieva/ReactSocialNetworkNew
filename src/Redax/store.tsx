import { type } from "os"
import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import {ActionsProfilePageType} from './profileReducer';
import {ActionsDialogsPageType} from './dialogReducer';

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
    newMessageBody:string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
  
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes= ActionsProfilePageType | ActionsDialogsPageType

const store: StoreType = {
    _state: {
        profilePage: {   
            NewPostText: 'it-kamasutra.com',
            posts: [{ id: 1, message: "Hi,how are you?", likeCounts: 44 },
            { id: 1, message: "It my first post", likeCounts: 344 }],

        },
        dialogsPage: {
            newMessageBody:"",
            dialogs: [{ id: 1, name: "Anna" },
            { id: 2, name: "Anna" },
            { id: 3, name: "Vlad" },
            { id: 4, name: "Lena" },
            { id: 5, name: "Pasha" }],
            messages: [{ id: 1, message: "Hello" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "YOooo!!!" }]
        },
        
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
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogReducer(this._state.dialogsPage,action)
}
}



export default store;

