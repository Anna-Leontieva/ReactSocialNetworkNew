import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export  type DialogsPropsType={
dialogs:Array<DialogType>
messages:Array<MessageType>
}
type DialogType={
  id:number
  name:string
}
type MessageType={
  id:number
  message:string
}
 type PostType={
  id:number
  message:string
  likeCounts:number
}
export type PagePostType={
  posts:Array<PostType>
}

let dialogs =[{id:1,name:"Anna"},
    {id:2,name:"Anna"},
    {id:3,name:"Vlad"},
    {id:4,name:"Lena"},
    {id:5,name:"Pasha"}]
let  messages=[
        {id:1,message:"Hello"},
        {id:2,message:"How are you?"},
        {id:3,message:"YOooo!!!"}]
let posts=[
          {id:1,message:"Hi,how are you?",likeCounts:44},
          {id:1,message:"It my first post",likeCounts:344}
      ]
ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
