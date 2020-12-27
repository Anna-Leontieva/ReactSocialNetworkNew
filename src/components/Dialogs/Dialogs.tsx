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
   let dialogs =[{id:1,name:"Anna"},
    {id:2,name:"Anna"},
    {id:3,name:"Vlad"},
    {id:4,name:"Lena"},
    {id:5,name:"Pasha"}]
    let  messages=[
        {id:1,message:"Hello"},
        {id:2,message:"How are you?"},
        {id:3,message:"YOooo!!!"}]
    let dialogsElements= dialogs.map(d=><DialogItem  name={d.name} id={d.id}/>)
    let messagesElements=messages.map(m=><Message message={m.message}/>)
    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                 {dialogsElements} 
            </div>
            <div className={classes.messages}>
               {messagesElements}
            </div>
    </div>);
}
export default Dialogs;