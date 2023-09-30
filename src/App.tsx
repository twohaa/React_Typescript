import React from 'react';
import './App.css';
import User from './components/User';
import User1 from './components/User1';
import User2 from './components/User2';
import User3 from './components/User3';
import User4 from './components/User4';
import User5 from './components/User5';
import User6 from './components/User6';
import User7 from './components/User7';
import User8 from './components/User8';
import User9 from './components/User9';

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <User name="Twoha" age={23} isRegister={true} />
      <User1 lang={["Bangla", "English"]} obj={user} />
      <User2 arrOfObj={users} />
      <User3 status="success" />
      <User4>Click me</User4>
      <User5 btnStyle={btnStyles} />
      <User6 />
      <User7 />
      <User8 />
      <User9 />
    </div>
  );
}

//style
const btnStyles = { color: "red", background: "black" }

//array of object
const users = [
  {
    id: 1,
    namee: "Twoha",
    email: "mahfuzztwohaa@gmail.com",
    age: 33
  },
  {
    id: 2,
    namee: "Twohaaaa",
    email: "mahfuzztwohaa@gmail.com",
    age: 34
  },
]

//object
const user = {
  name: "twoha",
  age: 23,
  isRegistered: true,
  lang: ["Bangla", "English"]
}

export default App;
