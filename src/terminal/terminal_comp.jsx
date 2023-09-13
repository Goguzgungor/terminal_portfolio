import React, {useState} from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import {terminal_func} from "./terminal_func";
import {leadingText} from "./terminal_const";

const TerminalController = (props = {}) => {
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput>Welcome to my portfolio site</TerminalOutput>,
    ]);


    const onInput = (terminalInput) => {
        terminal_func(setTerminalLineData,terminalInput,terminalLineData);
    }
    return (
        <div className="container">
            <Terminal prompt={leadingText} name='Terminal' colorMode={ ColorMode.Dark }  onInput={ terminalInput => onInput(terminalInput) }>
                { terminalLineData }
            </Terminal>

        </div>
    )
};

export  default TerminalController;