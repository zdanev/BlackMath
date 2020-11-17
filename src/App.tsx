import React, { FunctionComponent, useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BigNum from "./BigNum";
import Keyboard from "./Keyboard"
import KeyboardInput from "./KeyboardInput"
import MainMenu from './MainMenu';
import GameStats from "./GameStats";
import Alert from 'react-bootstrap/Alert';

const App = () => {

  const [message, setMessage] = useState<string>("Let's play a game of prime factors...");
  const [variant, setVariant] = useState<string>("info");

  const [num, setNum] = useState<string>("36");
  const [input, setInput] = useState<string>("= ");
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  function click(key: string) {
    switch (key) {
      case "x":
        if (canSubmit) {
          setCanSubmit(false);
          setMessage("");
          setInput(input + " x ");
        }
        break;
      case "submit":
        if (canSubmit) {
          setCanSubmit(false);
          if (verify(input, parseInt(num))) {
            setMessage("Correct!");
            setVariant("success");
          }
        }
        break;
      default:
        setCanSubmit(true);
        setMessage("Press SUBMIT to verify your answer...");
        setVariant("info");
        setInput(input + key);
      }
  }

  function verify(input: string, result: number) {
    var product = 1;
    var errors = "";
    var parts = input.substr(2).split(" x ");

    parts.forEach(part => {
      var num = parseInt(part);
      if (isPrime(num)) {
        product *= num;
      } else {
        errors += "" + num + " is not a prime number.\r\n";
      }
    });

    if (result !== product) errors += "Product does not match!";

    setMessage(errors);
    setVariant("danger");

    return errors === "" && result === product;
  }

  function isPrime(num: number) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  return (
    <div className="App">
      <MainMenu />
      <GameStats time="20" points="1200"/>
      <div>
        <div className="AlertBox">
          { message && <Alert variant={variant}>{message}</Alert> }
        </div>
        <BigNum num={num}/>
      </div>
      <KeyboardInput input={input}/>
      <Keyboard click={click}/>
    </div>
  );
}

export default App;
