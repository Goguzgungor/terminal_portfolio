import React, {useState} from 'react';
import { ColorMode, TerminalOutput } from 'react-terminal-ui';
import {terminal_func} from "./terminal_func";
import {leadingText} from "./terminal_const";
import {getLastLoginMessage} from "./utilfonc";
import Terminal from "./terminal";
import {StartingComponent} from "./StartingComponent";

const TerminalController = (props = {}) => {
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput>{getLastLoginMessage()}</TerminalOutput>,
    ]);


    const onInput = (terminalInput) => {
        terminal_func(setTerminalLineData,terminalInput,terminalLineData);
    }
    return (
        <div className="container">
            <StartingComponent/>
            <Terminal prompt={leadingText} height='100vh' name='Terminal' colorMode={ ColorMode.Dark }  onInput={ terminalInput => onInput(terminalInput) }>
                { terminalLineData }
            </Terminal>

        </div>
    )
};

export  default TerminalController;