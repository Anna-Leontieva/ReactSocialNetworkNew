import React from 'react';
import { ProfilePageType } from '../../../Redax/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts(props:ProfilePageType) {
    
    let postsElements=props.posts.map(m=><Post message={m.message} likeCounts={m.likeCounts}/>)
    return (
        <div>
            <div>
                My posts
            <div>New post</div>
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
          {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;