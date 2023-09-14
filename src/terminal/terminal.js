import React, { useState, useEffect, useRef } from 'react';
import  {TerminalInput , TerminalOutput } from 'react-terminal-ui';
import './terminalstyle.css';

export const ColorMode = {
    Light: 0,
    Dark: 1
};

function Terminal({
                      name,
                      prompt,
                      height = '600px',
                      colorMode,
                      onInput,
                      children,
                      startingInputValue = '',
                  }) {
    const [currentLineInput, setCurrentLineInput] = useState('');
    const [cursorPos, setCursorPos] = useState(0);

    const scrollIntoViewRef = useRef(null);

    const updateCurrentLineInput = event => {
        setCurrentLineInput(event.target.value);
    };

    const calculateInputWidth = (inputElement, chars) => {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.fontSize = window.getComputedStyle(inputElement).fontSize;
        span.style.fontFamily = window.getComputedStyle(inputElement).fontFamily;
        span.innerText = chars;
        document.body.appendChild(span);
        const width = span.getBoundingClientRect().width;
        document.body.removeChild(span);
        return -width;
    };

    const clamp = (value, min, max) => {
        if (value > max) return max;
        if (value < min) return min;
        return value;
    };

    const handleInputKeyDown = event => {
        if (!onInput) {
            return;
        }
        if (event.key === 'Enter') {
            onInput(currentLineInput);
            setCursorPos(0);
            setCurrentLineInput('');
        } else if (["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "Delete"].includes(event.key)) {
            const inputElement = event.currentTarget;
            let charsToRightOfCursor = "";
            let cursorIndex = currentLineInput.length - (inputElement.selectionStart || 0);
            cursorIndex = clamp(cursorIndex, 0, currentLineInput.length);

            if (event.key === 'ArrowLeft') {
                if (cursorIndex > currentLineInput.length - 1) cursorIndex--;
                charsToRightOfCursor = currentLineInput.slice(currentLineInput.length - 1 - cursorIndex);
            }
            else if (event.key === 'ArrowRight' || event.key === 'Delete') {
                charsToRightOfCursor = currentLineInput.slice(currentLineInput.length - cursorIndex + 1);
            }
            else if (event.key === 'ArrowUp') {
                charsToRightOfCursor = currentLineInput.slice(0)
            }

            const inputWidth = calculateInputWidth(inputElement, charsToRightOfCursor);
            setCursorPos(inputWidth);
        }
    };

    useEffect(() => {
        setCurrentLineInput(startingInputValue.trim());
    }, [startingInputValue]);

    const performScrolldown = useRef(false);
    useEffect(() => {
        if (performScrolldown.current) {
            setTimeout(() => scrollIntoViewRef.current.scrollIntoView({ behavior: "auto", block: "nearest" }), 500);
        }
        performScrolldown.current = true;
    }, [children]);

    useEffect(() => {
        if (onInput == null) {
            return;
        }
        const elListeners = [];
        for (const terminalEl of document.getElementsByClassName('react-terminal-wrapper')) {
            const listener = () => (terminalEl?.querySelector('.terminal-hidden-input'))?.focus();
            terminalEl?.addEventListener('click', listener);
            elListeners.push({ terminalEl, listener });
        }
        return function cleanup() {
            elListeners.forEach(elListener => {
                elListener.terminalEl.removeEventListener('click', elListener.listener);
            });
        };
    }, [onInput]);

    const classes = ['react-terminal-wrapper'];
    if (colorMode === ColorMode.Light) {
        classes.push('react-terminal-light');
    }
    return (
        <div className={classes.join(' ')} >
            <div className="react-terminal" style={{ height }}>
                {children}
                {onInput && <div className="react-terminal-line react-terminal-input react-terminal-active-input" data-terminal-prompt={prompt || '$'} key="terminal-line-prompt">{currentLineInput}<span className="cursor" style={{ left: `${cursorPos + 1}px` }}></span></div>}
                <div ref={scrollIntoViewRef}></div>
            </div>
            <input className="terminal-hidden-input" placeholder="Terminal Hidden Input" value={currentLineInput} autoFocus={onInput != null} onChange={updateCurrentLineInput} onKeyDown={handleInputKeyDown} />
        </div>
    );
}

export { TerminalInput, TerminalOutput };
export default Terminal;
