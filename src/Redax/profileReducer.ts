import { PostType, ProfilePageType} from "./state";
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
export type ActionsProfilePageType=ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>
 const profileReducer=(state:ProfilePageType,action:ActionsProfilePageType)=>{
    if (action.type === "ADD-POST") {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: action.postText,
            likeCounts: 0
        }
      state.posts.push(newPost);
      state.NewPostText = '';
    } else if (action.type === "CHANGE-NEW-TEXT") {
      state.NewPostText = action.newText;
    } 
    return state;
}
export default profileReducer;