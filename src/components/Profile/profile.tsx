import React from 'react';
import store, {ActionsTypes, PostType, ProfilePageType, StoreType} from '../../Redax/state';
import MyPosts from './MyPosts/MyPosts';
import classes from './profile.module.css';
type ProfilePropsType={
    profilePage:ProfilePageType
    addPostCallBack:(postText:string)=>void
    changeNewTextCallback:(newText:string)=>void
    dispatch:(action:ActionsTypes)=>void
}
function Profile(props: ProfilePropsType){
    
    return(
        <div className={classes.content}>
            <div><img src="https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE"></img></div>
            <div>ava+description</div>
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} addPostCallBack={props.addPostCallBack} changeNewTextCallback={props.changeNewTextCallback} />
        </div>
    );
}
export default Profile;