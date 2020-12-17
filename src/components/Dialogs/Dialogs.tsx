import React from 'react';
import classes from './Dialogs.module.css';
function Dialogs(props: any) {
    return (<div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog+''+classes.active}>Anna</div>
                <div className={classes.dialog}>Dimych</div>
                <div className={classes.dialog}>Max</div>
                <div className={classes.dialog}>Valera</div>
                <div className={classes.dialog}>Lena</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>YOO!!!</div>
            </div>
    </div>);
}
export default Dialogs;