import Button from 'react-bootstrap/Button';

function Keyboard() {
    return(
        <div className="Keyboard">
            <div>
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <Button variant="secondary">3</Button>
                <Button variant="secondary">4</Button>
                <Button variant="secondary">5</Button>
            </div>
            <div>
                <Button variant="secondary">6</Button>
                <Button variant="secondary">7</Button>
                <Button variant="secondary">8</Button>
                <Button variant="secondary">9</Button>
                <Button variant="secondary">0</Button>
            </div>
            <div>
                <Button variant="primary">x</Button>
                <Button variant="success">SUBMIT</Button>
            </div>
        </div>
    );
}

export default Keyboard;