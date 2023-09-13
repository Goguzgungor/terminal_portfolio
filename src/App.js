import logo from './logo.svg';
import './App.css';
import Terminal from "react-terminal-ui";
import React from "react";
import TerminalController from "./terminal/terminal_comp";

function App() {
  return (
    <div className="App">
        <body>
        <TerminalController/>
        </body>
    </div>
  );
}

export default App;
