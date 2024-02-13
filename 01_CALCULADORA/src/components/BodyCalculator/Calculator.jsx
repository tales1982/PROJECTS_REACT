// /src/components/Calculator.js
// eslint-disable-next-line no-unused-vars
import React from "react";

import {
  Container,
  CorpoCalculadora,
  Display,
  Operacao,
  Caculo,
  Resultado,
  Teclado,
  DivButao,
  DivRow,
} from "./styles";
import Button from "../Botoes";
import theme from "../../styles/Variables/Variables";

const Calculator = () => {
  return (
    <Container>
      <CorpoCalculadora>
        <Display>
          <Operacao>
            <Resultado>{"12345678910"}</Resultado>
            <Caculo>{"4 + 4 + 4 + 4 + 4"}</Caculo>
          </Operacao>
        </Display>
        <Teclado>
          <div>
            <Button
              styles={{ color: theme.colors.botaoRoxo }}
              valor={"AC"}
              style
            />
            <Button
              styles={{ color: theme.colors.botaoRoxo }}
              valor={`\u00F7`}
            />
            <Button styles={{ color: theme.colors.botaoRoxo }} valor={"X"} />
            <Button
              styles={{
                color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo,
              }}
              valor={" ⇐"}
            />
          </div>
          <div>
            <Button styles={{ color: theme.colors.white }} valor={"7"} />
            <Button styles={{ color: theme.colors.white }} valor={"8"} />
            <Button styles={{ color: theme.colors.white }} valor={"9"} />
            <Button styles={{ color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo }} valor={"-"} />
          </div>
          <div>
            <Button styles={{ color: theme.colors.white }} valor={"4"} />
            <Button styles={{ color: theme.colors.white }} valor={"5"} />
            <Button styles={{ color: theme.colors.white }} valor={"6"} />
            <Button styles={{ color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo }} valor={"+"} />
          </div>
          <DivRow>
            <DivButao>
              <div>
                <Button styles={{ color: theme.colors.white }} valor={"1"} />
                <Button styles={{ color: theme.colors.white }} valor={"2"} />
                <Button styles={{ color: theme.colors.white }} valor={"3"} />
              </div>
              <div>
                <Button styles={{ color: theme.colors.white }} valor={"0"} />
                <Button styles={{ color: theme.colors.white }} valor={"."} />
                <Button styles={{ color: theme.colors.white }} valor={"%"} />
              </div>
            </DivButao>
            <div>
              <Button styles={{ color: theme.colors.white, height: '150px',
                backgroundColor: theme.colors.botaoRoxo }} valor={"="} />
            </div>
          </DivRow>
        </Teclado>
      </CorpoCalculadora>
    </Container>
  );
};

export default Calculator;
