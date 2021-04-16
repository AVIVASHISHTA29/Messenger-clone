import './App.css';
import { Button , InputLabel , Input , IconButton} from '@material-ui/core';
import React, {useState , useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [messages,setMessages] = useState([]);
  const [input,setInput] = useState('');
  const [username,setUsername] = useState('');
  //UseState is a vaiable in react
  //useEffect is a snippet of code which runs on a gien condition
  useEffect(() => {
    //runcode
    // if its blank inside [], this code runs once when the app component loads!
    setUsername(prompt('Please Enter Your Name'));
  }, []) //condition


  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data() })))
    })
  }, [])

  const sendMessage = (event) => {
  event.preventDefault(); //disbales refreshing the page every time we press enter
  // all the logic to send the message goes here!

  db.collection('messages').add({

    message: input,
    username:username,
    timestamp : firebase.firestore.FieldValue.serverTimestamp()


  })

  setMessages([...messages, {username:username , message:input}]); // the ... helps in appending the array of messages
  setInput('');
  }

  console.log(input);
  console.log(messages);
  return (
    <div className="App">
      <h1> Avi's Public Chatroom 😉 </h1>
      <h2> Welcome {username} </h2>
      {/* To map the <input> html to the above declared variable setInput and we have used useState to store temporarily the values as the user is inputting them! */}
      
      <form className="app_form">

        <FormControl className="app__FormControl">
          <Input className="app__Input" placeholder = "Enter a message..." value ={input} onChange = {event => setInput(event.target.value)}/>
          <IconButton className="app__IconButton" disabled={!input} variant = 'contained' color="primary" type='submit' onClick={sendMessage}><SendIcon/ ></ IconButton>
        </FormControl>
      
      </form>



      <FlipMove>
      {
        //everything inside becomes java script!
        messages.map(({id, message}) =>( //map returns something in every iteration, its more compact than foreach loop
          < Message key={id} username = {username} message={message}/>
          //<p>{message}</p>
        ))
      }
      </FlipMove>


    
    </div>
  );
}

export default App;
