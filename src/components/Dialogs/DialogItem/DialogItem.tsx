import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';
function DialogItem(props:any){
    return(
     <div className={classes.dialog+''+classes.active}>
         <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
     </div>
    );
 }
 export default DialogItem;