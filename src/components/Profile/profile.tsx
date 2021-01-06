import React from 'react';
import {ProfilePageType} from '../../Redax/state';
import MyPosts from './MyPosts/MyPosts';
import classes from './profile.module.css';
type ProfilePropsType={
    profilePage:ProfilePageType}
function Profile(props: ProfilePropsType){
    
    return(
        <div className={classes.content}>
            <div><img src="https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE"></img></div>
            <div>ava+description</div>
            <MyPosts profilePage={props.profilePage}/>
        </div>
    );
}
export default Profile;