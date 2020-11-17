import React from 'react';

interface KeyboardInputProps {
    input: string;
}

const KeyboardInput = (props: KeyboardInputProps) => {
    return (
        <div className="KeyboardInput">
            { props.input }
        </div>
    );
}

export default KeyboardInput;