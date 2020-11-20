import React from 'react';
import { Alert, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Alert variant="primary">
                <Alert.Heading>Install</Alert.Heading>
                Press the <strong>Add to Home Screen</strong> button to add the app to your home screen.
            </Alert>

            <Alert variant="dark">
                <Alert.Heading>What are prime factors?</Alert.Heading> 
                TODO: info about prime factors...<br/><br/>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" href="/factors">Play Prime Factors</Button>
                </div>
            </Alert>

            <Alert variant="dark">
                <Alert.Heading>How to play?</Alert.Heading>
                TODO: instructions...
            </Alert>
        </div>
    );
}

export default Home;