import React from 'react';

interface BigNumProps {
    num: String;
}

const BigNum = (props: BigNumProps) => {
    return (
        <div className="BigNum"> {props.num} </div>
    );
}

export default BigNum;