import './App.css'
import Lottery from "./Lottery";
import {sum} from "./helper"
import Login from './login';
import React from 'react';


function App() {

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }

  return (
    <>
      <Login />
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App;