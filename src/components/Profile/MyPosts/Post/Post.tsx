import React from 'react';
import classes from './Post.module.css';
type PostPropsTypes = {
    message: string
    likeCounts:number
}
function Post(props:PostPropsTypes) {
    return (
        <div className={classes.item}>
            <img src="http://www.youloveit.ru/uploads/posts/2019-08/1565284946_red4.jpg"></img>
           {props.message}
            post 1
            <div>
                <span>Like{props.likeCounts}</span>
            </div>
        </div>
    );
}
export default Post;