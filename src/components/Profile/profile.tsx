import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './profile.module.css';
function Profile(){
    return(
        <div className={classes.content}>
            <div><img src="https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE"></img></div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    );
}
export default Profile;