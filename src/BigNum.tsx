import React from 'react';
import { Alert } from 'react-bootstrap';

interface BigNumProps {
    num?: number;
    num1?: number;
    operator?: string;
    num2?: number;
    input?: string;
}

const BigNum = (props: BigNumProps) => {
    return (
        <div className="BigNum">
            <Alert variant="dark">
                {props.num} {props.num1} <span className="Operator">{props.operator}</span> {props.num2}
                <hr/>
                <div className="KeyboardInput">{props.input}</div>
            </Alert>
        </div>
    );
}

export default BigNum;