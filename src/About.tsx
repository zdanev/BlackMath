import React from 'react';
import { Alert } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Alert variant="info">
                <Alert.Heading>About</Alert.Heading>
                Some info about the app here...
            </Alert>
        </div>
    );
}

export default About;