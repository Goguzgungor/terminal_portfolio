import {TerminalOutput} from "react-terminal-ui";
import React from "react";
import {leadingText} from "./terminal_const";

export const terminal_func = (func,text,terminalLineData) => {
    if (text === 'clear') {
        func([]);
    }
    else if (text === 'help') {
        let newTerminalLineData = [...terminalLineData];
        newTerminalLineData.push([
            OutputElement('help'),
            <TerminalOutput>portfolio [command]</TerminalOutput>,
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>Usage:</TerminalOutput>,
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>portfolio goktug          gives a little paragraph abaout me</TerminalOutput>,
            <TerminalOutput>portfolio projects        gives a list of my projects</TerminalOutput>,
            <TerminalOutput>portfolio skills          gives a list of my skills</TerminalOutput>,
            <TerminalOutput>portfolio contact         gives a list of my contact information</TerminalOutput>,
            <TerminalOutput>portfolio resume          gives a link to my resume</TerminalOutput>,
            <TerminalOutput>portfolio articals        gives a link of my medium articals</TerminalOutput>,
        ]);
        func(newTerminalLineData);
    }
    else{
        let newTerminalLineData = [...terminalLineData];
        const editedText =`${leadingText} ${text}`;
        newTerminalLineData.push(<TerminalOutput>{editedText}</TerminalOutput>);
        newTerminalLineData.push(<TerminalOutput>zsh: command not found: {text}</TerminalOutput>);
        func(newTerminalLineData);
    }
}

const OutputElement = (text) => {
    const editedText =`${leadingText} ${text}`;
    return <TerminalOutput>{editedText}</TerminalOutput>;
}