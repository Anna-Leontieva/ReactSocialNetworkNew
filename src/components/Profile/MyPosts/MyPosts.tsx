import { type } from 'os';
import React from 'react';
import { ProfilePageType } from '../../../Redax/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
type ProfilePagePropsType={
    profilePage:ProfilePageType,
    addPostCallBack:(message:string)=>void
}
function MyPosts(props:ProfilePagePropsType) {
    
    let postsElements=props.profilePage.posts.map(m=><Post message={m.message} likeCounts={m.likeCounts}/>)
    
    let newPostElement=React.createRef<HTMLTextAreaElement>(); //специальній єлемент Реф которій будет создавать ссілку на єлемент с jsx
    let addPost =()=>{
        if( newPostElement.current)
      props.addPostCallBack( newPostElement.current.value)   //такая же запись:if(newPostElement.current!==null)alert(newPostElement.current.value),,,,if(newPostElement.current)alert(newPostElement.current.value),,,,alert(newPostElement.current?.value)
    }
    return (
        <div>
            <div>
                My posts
            <div>New post</div>
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>     {/*привязываем ref*/}
                 <button onClick={addPost}>Add post</button> {/*callback */}
            </div>
            <div className={classes.posts}>
          {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;