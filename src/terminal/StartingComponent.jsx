import './starting_component.css';
import React from 'react';
import batman from '../assets/batman.svg';

export const StartingComponent = () => {
    const welcome = '{{welcome}}';
    const goktug = ' Göktuğ Oğuz Güngör'
    return (
        <div className='startingComponent'>

        <div className='title'>
            <h1>goktug.cli</h1>
            <img src={batman} alt='Batman' className='logosmall' />
        </div>
        <div className='bordercont'>
            <div className='defaulttext'>This is actually my portfolio site</div>
            <div className='defaulttext'>And I wanted to make it like a terminal</div>
            <div className='welcometext'>{welcome}</div>
            <div className='title'>
                <div className='defaulttext'>I'm</div>
                <div className='welcometext'>{goktug}</div>
                <div className='defaulttext'>a software engineer</div>
            </div>
            <div className='title'>
                <div className='defaulttext'>Please type</div>
                <div className='welcometext'>`help`</div>
                <div className='defaulttext'>to get list of commands</div>
            </div>

        </div>

        </div>
    );
}


