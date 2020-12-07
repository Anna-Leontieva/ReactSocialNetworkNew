import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts(props:any) {
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
             <Post message="Hi,how are you?" likeCounts={44}/>
             <Post message="IT my first post" likeCounts={334}/>
            </div>
        </div>
    );
}
export default MyPosts;