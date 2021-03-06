import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import Keyboard from "./Keyboard";
import BigNum from './BigNum';

const Fractions = () => {
    const [message, setMessage] = useState<string>("Let's play a game of fractions...");
    const [variant, setVariant] = useState<string>("info");
    const [points, setPoints] = useState<number>(0);

    return (
        <div className="Factors">
            <div>
                <Alert variant={variant}>
                    <Alert.Heading>Fractions</Alert.Heading>
                    {message}
                </Alert>

                <BigNum num={12} operator="/" num2={24} />
 


                <Keyboard />
            </div>
        </div>
    )
}

export default Fractions;