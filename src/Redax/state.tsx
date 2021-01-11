let renderEntireTree = () =>{
    console.log("State was changed")
}
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
    NewPostText:string
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
        NewPostText:'it-kamasutra.com',
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
    }
}
export const addPost=(postText:string)=>{
    const newPost:PostType={
        id:new Date().getTime(),
        message:state.profilePage.NewPostText='',
        likeCounts:0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.NewPostText='';
   renderEntireTree();       //добавляем посты с помощью renderEntireTree(state)
}
export const  changeNewTextCallback=(newText:string)=>{
 state.profilePage.NewPostText=newText;
 renderEntireTree();
}


export default state;