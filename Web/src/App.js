
import { useState } from 'react';

import './styles/App.css'
import './styles/reset.css'

import {makeRequest} from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

function App() {
   const[input,setInput] =useState("")
   const[chatLog,setChatLog] =useState([
      {user:"gpt",
   message:"How can I help you today?"}
   ])
   async function handleSubmit(e){

      e.preventDefault();
      let response = await makeRequest({prompt:input})
      response = response.date.split('\n').map(line=><p>{line}</p>)
      setChatLog([
         ...chatLog,{
            use:'me',
            message:`${input}`
         },{
            use:'gpt',
            message:response
         }
      ])
      setInput("")
   }
  return (
    <div className="App">
      <SideMenu></SideMenu>

      <section className='chatbox'>
         <div className='chat-log'>
            {chatLog.map((message,index)=>{
              <ChatMessage>
                  key={index}
                  message={message}
               </ChatMessage>
            })}
         </div>

         <div className='chat-input'>
            <form onSubmit={handleSubmit}>
               <input 
               rows="1"
               className='chat-input-textarea'
               value={input}
               onChange={e=>setInput(e.target.value)}
               />
            </form>
         </div>
      </section>
      <h1>App is running</h1>
     
    </div>
  );
}

export default App;
