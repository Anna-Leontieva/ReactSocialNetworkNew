import { type } from 'os';
import React, { ChangeEvent } from 'react';
import { isPropertySignature } from 'typescript';
import { StoreType, ProfilePageType, ActionsTypes, addPostAC, changeNewTextAC } from '../../../Redax/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

type ProfilePagePropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: ActionsTypes) => void
}
function MyPosts(props: ProfilePagePropsType) {

    let postsElements = props.profilePage.posts.map(m => <Post key={m.id} message={m.message} likeCounts={m.likeCounts} />)

    const addPost = () => {
        //props.addPostCallBack(props.profilePage.NewPostText);
        props.dispatch(addPostAC(props.profilePage.NewPostText));
    } 

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value));
    }

    return (
        <div>
            <div>
                My posts
            <div>New post</div>
            </div>
            <div>
                <textarea value={props.profilePage.NewPostText} onChange={newTextChangeHandler} />   
                <button onClick={addPost} >Add post</button> {/*callback */}
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;