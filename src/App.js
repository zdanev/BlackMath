import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BigNum from "./BigNum";
import Keyboard from "./Keyboard"
import KeyboardInput from "./KeyboardInput"
import MainMenu from './MainMenu';
import GameStats from "./GameStats";
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <GameStats />

      <Alert variant="success">That is corect!</Alert>

      <BigNum />
      <KeyboardInput />
      <Keyboard />
    </div>
  );
}

export default App;
