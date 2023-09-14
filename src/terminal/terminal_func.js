import React from "react";
import {leadingText} from "./terminal_const";
import goktugoguzgungor_cv from "../assets/goktugoguzgungor_cv.pdf";
import './terminalstyle.css';
import {getLastLoginMessage} from "./utilfonc";
import cuteDog from '../assets/cuteDog.jpeg';
import TerminalOutput from "./TerminallOutput";
export const terminal_func = (func,text,terminalLineData) => {
    let newTerminalLineData = [...terminalLineData];
    if (text === 'clear') {
        func([
            <TerminalOutput>{getLastLoginMessage()}</TerminalOutput>,
        ]);
        return;
    }
    else if (text === 'help') {
        newTerminalLineData.push([
            OutputElement('help'),
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>gok [command]</TerminalOutput>,
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>Usage:</TerminalOutput>,
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>gok me              gives a little paragraph abaout me</TerminalOutput>,
            <TerminalOutput>gok projects        list of my projects</TerminalOutput>,
            <TerminalOutput>gok contact         gives my contact information</TerminalOutput>,
            <TerminalOutput>gok cv              a button appears to dowland my resume</TerminalOutput>,
            <TerminalOutput>gok articals        list of the articals</TerminalOutput>,
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>Other commands:</TerminalOutput>,
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>clear               clear the page</TerminalOutput>,
            <TerminalOutput>mkdir [FILENAME]    just added it for fun</TerminalOutput>,

        ]);
    }
    else if (text === 'sude') {
        newTerminalLineData.push([
            OutputElement('sude'),
            <TerminalOutput>
                <a
                    href={'https://www.youtube.com/watch?v=PEnJbjBuxnw&ab_channel=AJR'}
                    target="_blank"
                    rel="noreferrer"
                    color="yellow"
                >
                    :)
                </a>

            </TerminalOutput>,
            <TerminalOutput>
                <img className='dogpic' src={cuteDog}></img>
            </TerminalOutput>
        ] );
    }
    else if (text.startsWith("mkdir")) {
        newTerminalLineData.push(<TerminalOutput>mkdir: cannot create directory ‘{text.split(" ")[1]}’: File exists(also dont try to break system)</TerminalOutput>);
    }
    else if (text === 'gok cv') {
        newTerminalLineData.push( [
            OutputElement('gok cv'),
            <div className="downloadRes">
                <TerminalOutput>
                    Click to download my resume ->
                </TerminalOutput>
            <TerminalOutput>
            <a
                href={goktugoguzgungor_cv}
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
            >
                resume
            </a>
        </TerminalOutput>
            </div>
        ])
    }
    else if (text === 'gok contact') {
        newTerminalLineData.push([
            OutputElement('gok contact'),
            <TerminalOutput>
                <a
                    href={'https://www.linkedin.com/in/goktugoguzgungor/'}
                    target="_blank"
                    rel="noreferrer"
                    color="yellow"
                >
                    LinkedIn
                </a>
            </TerminalOutput>] );
    }
    else if (text === 'gok articals') {
        newTerminalLineData.push([
            OutputElement('gok articals'),
            <TerminalOutput>
                <a
                    href={'https://medium.com/@goguzgungor59'}
                    target="_blank"
                    rel="noreferrer"
                    color="yellow"
                >
                    Medium
                </a>
            </TerminalOutput>] );
    }
    else if(text === 'gok me'){
        newTerminalLineData.push([
            OutputElement('gok me'),
            <TerminalOutput>
                I'm Goktug Oguz Gungor, a software developer from Turkey. I'm currently studying at Yıldız Tech.
            </TerminalOutput>,
            <TerminalOutput>
                really interested in back-end development, web3 and distributed systems.
            </TerminalOutput>,
            <TerminalOutput>
                currently using Nest.js and Spring Boot for back-end development
            </TerminalOutput>,
            <TerminalOutput>
                using React and Flutter for front-end development.
                </TerminalOutput>,
            <TerminalOutput>
                I also have experience with C, Rust and Python.
            </TerminalOutput>
                ])
    }
    else if (text === 'gok projects') {
        newTerminalLineData.push([
            OutputElement('gok projects'),
            <TerminalOutput>
                <a
                    href={'https://twitter.com/budgetblocks'}
                    target="_blank"
                    rel="noreferrer"
                    color="yellow"
                >
                    BUDGET BLOCKS
                </a>
            </TerminalOutput>,
            <TerminalOutput>Budget Blocks is a blockchain-based financial management platform</TerminalOutput>,
            <TerminalOutput>designed to help individuals and businesses build and manage budgets,</TerminalOutput>,
            <TerminalOutput>track expenses, and make payments through user-friendly mobile</TerminalOutput>,
            <TerminalOutput>wallets. As a participant in the global Solana Hackathon, the project is currently seeking investment</TerminalOutput>,
            <TerminalOutput>and has not yet reached the end-user market. With its innovative approach to financial management and</TerminalOutput>,
            <TerminalOutput>its recognition in the hackathon community, Budget Blocks has the potential to revolutionize the</TerminalOutput>,
            <TerminalOutput>way we approach personal and business finances.</TerminalOutput>,
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>
                <a
                    href={'https://lokmastudio.com'}
                    target="_blank"
                    rel="noreferrer"
                    color="yellow"
                >
                    LOKMA
                </a>
            </TerminalOutput>,
            <TerminalOutput>LOKMA, LOKMA STUDIO Teknoloji A.Ş.'s mobile webtoon application. LOKMA provides licensed</TerminalOutput>,
            <TerminalOutput>publications of both domestic and foreign webtoons in the local languages of the regions it serves, </TerminalOutput>,
            <TerminalOutput>primarily Turkish. Currently, various webtoons such as "Dev Köpek Pi," "Terek," "Yazarımdan Çizerimden Nefret Ediyorum,"</TerminalOutput>,
            <TerminalOutput>and more can only be read for free on LOKMA.</TerminalOutput>,
            <TerminalOutput></TerminalOutput>,
            <TerminalOutput>
                <a
                    onClick={() => window.location.href = 'https://www.example.com'}
                    href={'https://siparisim.com.tr/'}
                    target="_blank"
                    rel="noreferrer"
                    color="yellow"
                >
                    SIPARISIM
                </a>
            </TerminalOutput>,
            <TerminalOutput>Siparisim is a multi appliaciton that I worked on Dop</TerminalOutput>,
            <TerminalOutput>Siparişim+, established through the collaboration between Digital Operations Services, which has been providing </TerminalOutput>,
            <TerminalOutput>services in the digital world and the telecommunications sector for over 20 years, and Turkcell, a "Global Company," operates </TerminalOutput>,
            <TerminalOutput>with a shared vision and mission to be alongside their subsidiaries in their digital transformations.</TerminalOutput>,
            <TerminalOutput>It offers a single ecosystem for all services in the digital age and provides superior digital service quality.</TerminalOutput>,


        ]);



    }
    else{
        const editedText =`${leadingText} ${text}`;
        newTerminalLineData.push(<TerminalOutput>{editedText}</TerminalOutput>);
        newTerminalLineData.push(<TerminalOutput>zsh: command not found: {text}</TerminalOutput>);
        newTerminalLineData.push(<TerminalOutput>Type help for commands</TerminalOutput>);
    }
    func(newTerminalLineData);

}

const OutputElement = (text) => {
    const editedText =`${leadingText} ${text}`;
    return <TerminalOutput>{editedText}</TerminalOutput>;
}