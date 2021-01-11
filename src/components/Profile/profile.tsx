import React from 'react';
import {PostType, ProfilePageType} from '../../Redax/state';
import MyPosts from './MyPosts/MyPosts';
import classes from './profile.module.css';
type ProfilePropsType={
    profilePage:ProfilePageType
    addPostCallBack:(postText:string)=>void
    changeNewTextCallback:(newText:string)=>void
}
function Profile(props: ProfilePropsType){
    
    return(
        <div className={classes.content}>
            <div><img src="https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE"></img></div>
            <div>ava+description</div>
            <MyPosts profilePage={props.profilePage} addPostCallBack={props.addPostCallBack} changeNewTextCallback={props.changeNewTextCallback} />
        </div>
    );
}
export default Profile;