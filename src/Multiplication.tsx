import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import Keyboard from "./Keyboard";
import BigNum from './BigNum';

const Multiplication = () => {
    const [message, setMessage] = useState<string>("Let's play a game of multiplication...");
    const [variant, setVariant] = useState<string>("info");
    const [points, setPoints] = useState<number>(0);

    return (
        <div className="Multiplication">
            <div>
                <Alert variant={variant}>
                    <Alert.Heading>Multiplication</Alert.Heading>
                    {message}
                </Alert>

                <BigNum num1={7} operator="x" num2={3} input="=" />



                <Keyboard />
            </div>
        </div>
    )
}

export default Multiplication;