import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@mel/button"
import { Body } from "@mel/body"
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Body></Body>

        Count --{'>'} {count}
        <Button onClick={() => setCount((prev) => ++prev)}></Button>
      </header>
    </div>
  );
}

export default App;
