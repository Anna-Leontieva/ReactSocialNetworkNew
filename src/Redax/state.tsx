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
}
let state: RootStateType = {
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
    }
}



export type StoreType = {
    _state: RootStateType
    changeNewTextCallback: (newText: string) => void
    addPost: (postText: string) => void
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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state changed");
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.NewPostText,
            likeCounts: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.NewPostText = '';
        this._callSubscriber();    //добавляем посты с помощью renderEntireTree(state)
    },
    changeNewTextCallback(newText: string) {
        this._state.profilePage.NewPostText = newText;
        this._callSubscriber();
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
        }
    }
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>
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

export default store;

