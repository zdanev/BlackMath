import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import Keyboard from "./Keyboard";
import BigNum from './BigNum';

const Division = () => {
    const [message, setMessage] = useState<string>("What is the quotient of the numbers below?");
    const [variant, setVariant] = useState<string>("info");
    const [points, setPoints] = useState<number>(0);

    return (
        <div className="Division">
            <div>
                <Alert variant={variant}>
                    <Alert.Heading>Division</Alert.Heading>
                    {message}
                </Alert>

                <BigNum num1={24} operator=":" num2={3} input="=" />
 


                <Keyboard />
            </div>
        </div>
    )
}

export default Division;