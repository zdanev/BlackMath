import React from 'react';
import { Alert } from 'react-bootstrap';

interface BigNumProps {
    num: number;
}

const BigNum = (props: BigNumProps) => {
    return (
        <div className="BigNum">
            <Alert variant="dark">{props.num}</Alert>
        </div>
    );
}

export default BigNum;