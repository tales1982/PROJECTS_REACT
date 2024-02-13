// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  CalculatorStyles,
  Container,
  Display,
  DisplayResult,
  Title,
  DisplayInput,
} from "./styles";
import Buttons from "../Botoes";
import theme from "../../styles/Variables/Variables";

const Calculator = () => {
  const [butaoValor, setButaoValor] = useState("");

  const handleButtonClick = (value) => {
    setButaoValor((prevValue) => {
      const newValue = prevValue + value.toString();
      console.log("Valor atual:", newValue); // Adiciona este console.log para verificar os valores
      return newValue;
    });
  };


  return (
    <Container>
      <Title>CALCULADORA</Title>
      <CalculatorStyles>
        <Display>
          <DisplayInput type="number" />
        </Display>
        <DisplayResult>resultado000000</DisplayResult>
        <div>
          <div>
            <Buttons onClick={() => handleButtonClick("AC")} number={"AC"} />
            <Buttons onClick={() => handleButtonClick("(")} number={"("} />
            <Buttons onClick={() => handleButtonClick(")")} number={")"} />
            <Buttons onClick={() => handleButtonClick("mod")} number={"mod"} />
            <Buttons onClick={() => handleButtonClick("n")} number={"n"} />
          </div>
          <div>
            <Buttons onClick={() => handleButtonClick("7")} number={7} />
            <Buttons onClick={() => handleButtonClick("8")} number={8} />
            <Buttons onClick={() => handleButtonClick("9")} number={9} />
            <Buttons onClick={() => handleButtonClick("div")} number={"div"} />
            <Buttons
              onClick={() => handleButtonClick("rais")}
              number={"rais"}
            />
          </div>
          <div>
            <Buttons onClick={() => handleButtonClick("4")} number={4} />
            <Buttons onClick={() => handleButtonClick("5")} number={5} />
            <Buttons onClick={() => handleButtonClick("6")} number={6} />
            <Buttons onClick={() => handleButtonClick("x")} number={"x"} />
            <Buttons onClick={() => handleButtonClick(" ")} number={"x²"} />
          </div>
          <div>
            <Buttons onClick={() => handleButtonClick("1")} number={1} />
            <Buttons onClick={() => handleButtonClick("2")} number={2} />
            <Buttons onClick={() => handleButtonClick("3")} number={3} />
            <Buttons onClick={() => handleButtonClick("-")} number={"-"} />
            <Buttons onClick={() => handleButtonClick("+")} number={"+"} />
          </div>
          <div>
            <Buttons onClick={() => handleButtonClick("0")} number={0} />
            <Buttons onClick={() => handleButtonClick(",")} number={","} />
            <Buttons onClick={() => handleButtonClick("%")} number={"%"} />

            <Buttons
              onClick={() => handleButtonClick("=")}
              number={"="}
              style={{
                width: "145px",
                backgroundColor: `${theme.colors.greenButton}`,
              }}
            />
          </div>
        </div>
      </CalculatorStyles>
    </Container>
  );
};

export default Calculator;
