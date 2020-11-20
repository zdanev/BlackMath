import React from 'react';
import { Alert } from 'react-bootstrap';
import { preProcessFile } from 'typescript';

interface BigNumProps {
    num: number;
    input: string;
}

const BigNum = (props: BigNumProps) => {
    return (
        <div className="BigNum">
            <Alert variant="dark">
                {props.num}
                <hr/>
                <div className="KeyboardInput">{props.input}</div>
            </Alert>
        </div>
    );
}

export default BigNum;