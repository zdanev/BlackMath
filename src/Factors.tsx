import React, { useState } from "react";
import BigNum from "./BigNum";
import Keyboard from "./Keyboard"
import KeyboardInput from "./KeyboardInput"
import GameStats from "./GameStats";
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/esm/Button";
import MathUtils from "./MathUtils";

const Factors = () => {
  const [message, setMessage] = useState<string>("Let's play a game of prime factors...");
  const [variant, setVariant] = useState<string>("info");
  const [num, setNum] = useState<number>(MathUtils.getRandomInt(100));
  const [input, setInput] = useState<string>("= ");
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  function restart() {
    setMessage("Let's play a game of prime factors...");
    setVariant("info");
    setNum(MathUtils.getRandomInt(100));
    setInput("= ");
    setCanSubmit(false);
    setIsGameOver(false);
  }

  function click(key: string) {
    switch (key) {
      case "x":
        if (canSubmit) {
          setCanSubmit(false);
          setMessage("Enter another prime number...");
          setVariant("info");
          setInput(input + " x ");
        }
        break;
      case "submit":
        if (canSubmit) {
          setCanSubmit(false);
          setIsGameOver(true);
          if (verify(input, num)) {
            setMessage("Correct!");
            setVariant("success");
            setPoints(points + 10);
          } else {
            setPoints(points - 10);
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
      product *= num;
      if (!MathUtils.isPrime(num)) {
        errors += "" + num + " is not a prime number.\r\n";
      }
    });

    if (result !== product) errors += "Product does not match!";

    setMessage(errors);
    setVariant("danger");

    return errors === "" && result === product;
  }

  return (
      <div className="Factors">
        <GameStats time={30} points={points}/>
        <div>
            <div className="AlertBox">
            { message &&
              <Alert variant={variant}>
                <Alert.Heading>Prime Fractors</Alert.Heading>
                {message}
              </Alert>
            }
            </div>
            <BigNum num={num}/>
        </div>
        <KeyboardInput input={input}/>
        { !isGameOver && <Keyboard click={click}/> }
        { isGameOver && 
            <div className="BottomDrawer">
            <Button variant="success" size="lg" block onClick={restart}>Play Again</Button> 
            </div>
        }
      </div>
  );
}

export default Factors;