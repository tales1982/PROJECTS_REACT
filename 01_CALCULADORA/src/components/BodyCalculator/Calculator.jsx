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

const Calculator = () => {
  const [butaoValor, setButaoValor] = useState("");

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
            <Buttons onClick={() => console.log("Clicou")} number={"AC"} />
            <Buttons onClick={() => console.log("Clicou")} number={"("} />
            <Buttons onClick={() => console.log("Clicou")} number={")"} />
            <Buttons onClick={() => console.log("Clicou")} number={"mod"} />
            <Buttons onClick={() => console.log("Clicou")} number={"n"} />
          </div>
          <div>
            <Buttons onClick={() => console.log("Clicou")} number={7} />
            <Buttons onClick={() => console.log("Clicou")} number={8} />
            <Buttons onClick={() => console.log("Clicou")} number={9} />
            <Buttons onClick={() => console.log("Clicou")} number={"div"} />
            <Buttons onClick={() => console.log("Clicou")} number={"rais"} />
          </div>
          <div>
            <Buttons onClick={() => console.log("Clicou")} number={4} />
            <Buttons onClick={() => console.log("Clicou")} number={5} />
            <Buttons onClick={() => console.log("Clicou")} number={6} />
            <Buttons onClick={() => console.log("Clicou")} number={'x'} />
            <Buttons
              onClick={() => console.log("Clicou")}
              number={"x²"}
            />
          </div>
          <div>
            <Buttons onClick={() => console.log("Clicou")} number={1} />
            <Buttons onClick={() => console.log("Clicou")} number={2} />
            <Buttons onClick={() => console.log("Clicou")} number={3} />
            <Buttons onClick={() => console.log("Clicou")} number={"-"} />
            <Buttons onClick={() => console.log("Clicou")} number={"+"} />
          </div>
          <div>
            <Buttons onClick={() => console.log("Clicou")} number={0} />
            <Buttons onClick={() => console.log("Clicou")} number={","} />
            <Buttons onClick={() => console.log('%')} number={"%"} />

            <Buttons
              onClick={() => console.log("Clicou")}
              number={"="}
              style={{ width: "145px" }}
            />
          </div>
        </div>
      </CalculatorStyles>
    </Container>
  );
};

export default Calculator;
