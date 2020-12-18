import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props:any){
   return(
    <div className={classes.dialog+''+classes.active}>
        <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
    </div>
   );
}
function Message(props:MessageType){
    return(
    <div className={classes.message}>
      {props.message}
    </div>
    );
}
type DialogItemsType={
    name:string
    id:number
}
type MessageType={
    message:string
}
function Dialogs(props: DialogItemsType) {
    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                    <DialogItem id="1" name="Anna"/>
                    <DialogItem id="2" name="Vlad"/>
                    <DialogItem id="3" name="Lena"/>
                    <DialogItem id="4" name="Sveta"/>
                    <DialogItem id="5" name="Pasha"/>
            </div>
            <div className={classes.messages}>
                <Message message="hello"/>
                <Message message="How are you?"/>
                <Message message="yooo!"/>
                <Message message="good buy"/>
            </div>
    </div>);
}
export default Dialogs;