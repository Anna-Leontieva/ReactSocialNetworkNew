import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogPageType } from '../../Redax/state';


type DialogPropsType = {
    dialogsPage: DialogPageType
}


function Dialogs(props: DialogPropsType) {
   
    let dialogsElements= props.dialogsPage.dialogs.map(d=><DialogItem  name={d.name} id={d.id}/>)
    let messagesElements=props.dialogsPage.messages.map(m=><Message message={m.message}/>)
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