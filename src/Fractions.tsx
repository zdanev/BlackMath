import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import GameStats from './GameStats';

const Fractions = () => {
    const [message, setMessage] = useState<string>("Let's play a game of fractions...");
    const [variant, setVariant] = useState<string>("info");
    const [points, setPoints] = useState<number>(0);

    return (
        <div className="Factors">
            <GameStats time={30} points={points}/>
            <div>
                <Alert variant={variant}>
                    <Alert.Heading>Fractions</Alert.Heading>
                    {message}
                </Alert>
            </div>
        </div>
    )
}

export default Fractions;