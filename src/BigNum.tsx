import React from 'react';

interface BigNumProps {
    num: number;
}

const BigNum = (props: BigNumProps) => {
    return (
        <div className="BigNum">{props.num}</div>
    );
}

export default BigNum;