import React, { ChangeEvent } from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { ActionsTypes, DialogPageType, sendMessageAC } from '../../Redax/state';
import {updateNewMessageBodyAC} from '../../Redax/state';

type DialogPropsType = {
    dialogsPage: DialogPageType
    dispatch:(action:ActionsTypes)=>void
    newMessageBody:string
}


function Dialogs(props: DialogPropsType) {
   
    let dialogsElements= props.dialogsPage.dialogs.map(d=><DialogItem  name={d.name} id={d.id}/>)
    let messagesElements=props.dialogsPage.messages.map(m=><Message message={m.message}/>)

    
    let addMessage=()=>{
      props.dispatch(sendMessageAC(props.newMessageBody));
    }
    const onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body= e.currentTarget.value;
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                 {dialogsElements} 
            </div>
            <div className={classes.messages}>
               {messagesElements}
            </div>
            <div>
                <textarea value={props.newMessageBody}
                placeholder={'Enter new message'}
                onChange={onNewMessageChange}
                ></textarea>
                <button onClick={addMessage}>Add Message</button>
            </div>
    </div>);
}
export default Dialogs;