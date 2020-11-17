import React from 'react';
import { Alert } from 'react-bootstrap';

interface KeyboardInputProps {
    input: string;
}

const KeyboardInput = (props: KeyboardInputProps) => {
    return (
        <div className="KeyboardInput">
            <Alert variant="dark"> { props.input }</Alert>
        </div>
    );
}

export default KeyboardInput;