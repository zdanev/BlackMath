import React from 'react';
import Button from 'react-bootstrap/Button';

interface KeyboardProps {
    click?: (key: string) => void;
}

const Keyboard = (props: KeyboardProps) => {

    function click(s: string) {
        console.log("click " + s);
        if (props.click) props.click(s);
    }

    return(
        <div className="Keyboard">
            <div>
                <Button variant="secondary" onClick={() => click("1")}>1</Button>
                <Button variant="secondary" onClick={() => click("2")}>2</Button>
                <Button variant="secondary" onClick={() => click("3")}>3</Button>
                <Button variant="secondary" onClick={() => click("4")}>4</Button>
                <Button variant="secondary" onClick={() => click("5")}>5</Button>
            </div>
            <div>
                <Button variant="secondary" onClick={() => click("6")}>6</Button>
                <Button variant="secondary" onClick={() => click("7")}>7</Button>
                <Button variant="secondary" onClick={() => click("8")}>8</Button>
                <Button variant="secondary" onClick={() => click("9")}>9</Button>
                <Button variant="secondary" onClick={() => click("0")}>0</Button>
            </div>
            <div>
                <Button variant="primary" onClick={() => click("x")}>x</Button>
                <Button variant="success" onClick={() => click("submit")}>SUBMIT</Button>
            </div>
        </div>
    );
}

export default Keyboard;