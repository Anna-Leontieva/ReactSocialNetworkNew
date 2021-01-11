import { renderEntireTree } from "../render"


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
export type ProfilePageType={
    posts:Array<PostType>
    MessageForNewTextPost:string
}
export type DialogPageType={
    dialogs:Array<DialogType>
    messages:Array<MessageType>
}
export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
}
let state:RootStateType = {
    profilePage: {
        MessageForNewTextPost:"gggg",
        posts: [{ id: 1, message: "Hi,how are you?", likeCounts: 44 },
            { id: 1, message: "It my first post", likeCounts: 344 }
        ]
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
    }
}
export let addPost=(postText:string)=>{
    const newPost:PostType={
        id:new Date().getTime(),
        message:postText,
        likeCounts:0
    }
    state.profilePage.posts.push(newPost);
   renderEntireTree(state);       //добавляем посты с помощью renderEntireTree(state)
}

export default state;