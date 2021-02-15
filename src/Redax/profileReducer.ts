import { PostType, ProfilePageType } from "./store";

let initialState={
    NewPostText: 'it-kamasutra.com',
            posts: [{ id: 1, message: "Hi,how are you?", likeCounts: 44 },
            { id: 1, message: "It my first post", likeCounts: 344 }],
}

export type AddPostACType  = {
    type: string
    postText: string
}

export const addPostAC = (postText: string): AddPostACType => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const changeNewTextAC = (newText: string):any=> {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}
export type ActionsProfilePageType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>
const profileReducer = (state: ProfilePageType=initialState, action: ActionsProfilePageType):ProfilePageType  => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCounts: 0
            };
            state.posts.push(newPost);
            state.NewPostText = '';
            return state;
        case "CHANGE-NEW-TEXT":
            state.NewPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;