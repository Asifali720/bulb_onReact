// import logo from './logo.svg';
import './App.css';
import imageOff from './bulb.png'
import imageOn from './light-bulb.png'
import React, { useState } from "react";

function App() {
 const [toggle, setToggle] = useState(false)
 const [background, setBackground] = useState(true)

 const  handleOnClickToggle = () =>{
   setToggle(!toggle)
   setBackground(!background)
   
  }
  return (
    <div className="App" >
      <div style={{backgroundColor: background?'black':'#ffc30a', height: '100vh'}}>
      <img src={toggle === true?imageOn:imageOff} alt="" />
      <div style={{backgroundColor: background?'black':'#ffc30a' }}>
        <button style={{ borderRadius: '5px', backgroundColor: 'green', padding: '10px', border: 'none', color: 'white', position: 'absolute', left: '50%', transform: 'translate(-50%)'}} onClick={handleOnClickToggle}>{toggle?'Bulb off':'Bulb on'}</button>
      </div>
      </div>  
    </div>
  );
}

export default App;
