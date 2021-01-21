import { ActionsTypes, PostType, ProfilePageType } from "./state";
 const profileReducer=(state:ProfilePageType,action:ActionsTypes)=>{
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