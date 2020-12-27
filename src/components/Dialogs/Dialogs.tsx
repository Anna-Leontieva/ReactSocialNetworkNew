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

type MessageType={
    message:string
}
function Dialogs(props:any) {
   
    let dialogsElements= props.dialogs.map(d=><DialogItem  name={d.name} id={d.id}/>)
    let messagesElements=props.messages.map(m=><Message message={m.message}/>)
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