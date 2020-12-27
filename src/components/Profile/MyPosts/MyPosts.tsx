import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts() {
    let posts=[
        {id:1,message:"Hi,how are you?",likeCounts:44},
        {id:1,message:"It my first post",likeCounts:344}
    ]
    let postsElements=posts.map(m=><Post message={m.message} likeCounts={m.likeCounts}/>)
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