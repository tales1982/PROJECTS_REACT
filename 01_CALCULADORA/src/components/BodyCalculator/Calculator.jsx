// Calculator.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
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
            <Buttons number={'AC'}/>
            <Buttons number={'('} />
            <Buttons number={')'} />
            <Buttons number={'mod'} />
            <Buttons number={'n'} />
          </div>
          <div>
            <Buttons number={7} />
            <Buttons number={8} />
            <Buttons number={9} />
            <Buttons number={'div'} />
            <Buttons number={'rais'} />
          </div>
          <div>
            <Buttons number={4} />
            <Buttons number={5} />
            <Buttons number={6} />
            <Buttons number={'x'} />
            <Buttons number={'x²'} />
          </div>
          <div>
            <Buttons number={1} />
            <Buttons number={2} />
            <Buttons number={3} />
            <Buttons number={'-'} />
             <Buttons number={'+'} />
          </div>
          <div>
          <Buttons number={0} />
            <Buttons number={','} />
            <Buttons number={'%'} />
           
           <Buttons number={'='} style={{width: '145px'}} />
          </div>
        </div>
      </CalculatorStyles>
    </Container>
  );
};

export default Calculator;
