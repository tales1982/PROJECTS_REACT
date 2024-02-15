// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
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
  const [num, setNum] = useState("");
  const [operator, setOperator] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(""); // Adicione o estado para o resultado

  const changerNun = (value) => {
    if (value >= "0" && value <= "9") {
      if (operator === "") {
        setNum((prevNum) => prevNum + value);
      } else {
        setNum2((prevNum2) => prevNum2 + value);
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      setOperator(value);
    } else if (value === "=") {
      const calculatedResult = calculateResult();
      setResult(calculatedResult);
      setNum(calculatedResult); // Atualiza num com o resultado
      setOperator("");
      setNum2("");
    } else if (value === "AC") {
      setNum("");
      setOperator("");
      setNum2("");
      setResult(""); // Limpa o resultado ao limpar os valores
    } else if (value === "%") {
      // Adicione a lógica para porcentagem, se necessário
    }
  };

  const calculateResult = () => {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(num) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num) / parseFloat(num2);
        break;
      default:
        result = 0;
    }
    return result.toString();
  };
  return (
    <Container>
      <CorpoCalculadora>
        <Display>
          <Operacao>
            <Resultado>{result}</Resultado>
            <Caculo>
              {num}
              {operator}
              {num2}
            </Caculo>
          </Operacao>
        </Display>
        <Teclado>
          <div>
            <Button
              click={() => changerNun("AC")}
              styles={{ color: theme.colors.botaoRoxo }}
              valor={"AC"}
            />
            <Button
              click={() => changerNun("/")}
              styles={{ color: theme.colors.botaoRoxo }}
              valor={`\u00F7`}
            />
            <Button
              click={() => changerNun("*")}
              styles={{ color: theme.colors.botaoRoxo }}
              valor={"x"}
            />
            <Button
              styles={{
                color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo,
              }}
              valor={" ⇐"}
            />
          </div>
          <div>
            <Button
              click={() => changerNun("7")}
              styles={{ color: theme.colors.white }}
              valor={"7"}
            />
            <Button
              click={() => changerNun("8")}
              styles={{ color: theme.colors.white }}
              valor={"8"}
            />
            <Button
              click={() => changerNun("9")}
              styles={{ color: theme.colors.white }}
              valor={"9"}
            />
            <Button
              click={() => changerNun("-")}
              styles={{
                color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo,
              }}
              valor={"-"}
            />
          </div>
          <div>
            <Button
              click={() => changerNun("4")}
              styles={{ color: theme.colors.white }}
              valor={"4"}
            />
            <Button
              click={() => changerNun("5")}
              styles={{ color: theme.colors.white }}
              valor={"5"}
            />
            <Button
              click={() => changerNun("6")}
              styles={{ color: theme.colors.white }}
              valor={"6"}
            />
            <Button
              click={() => changerNun("+")}
              styles={{
                color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo,
              }}
              valor={"+"}
            />
          </div>
          <DivRow>
            <DivButao>
              <div>
                <Button
                  click={() => changerNun("1")}
                  styles={{ color: theme.colors.white }}
                  valor={"1"}
                />
                <Button
                  click={() => changerNun("2")}
                  styles={{ color: theme.colors.white }}
                  valor={"2"}
                />
                <Button
                  click={() => changerNun("3")}
                  styles={{ color: theme.colors.white }}
                  valor={"3"}
                />
              </div>
              <div>
                <Button
                  click={() => changerNun("0")}
                  styles={{ color: theme.colors.white }}
                  valor={"0"}
                />
                <Button styles={{ color: theme.colors.white }} valor={"."} />
                <Button
                  click={() => changerNun("%")}
                  styles={{ color: theme.colors.white }}
                  valor={"%"}
                />
              </div>
            </DivButao>
            <div>
              <Button
                click={() => changerNun("=")}
                styles={{
                  color: theme.colors.white,
                  height: "150px",
                  backgroundColor: theme.colors.botaoRoxo,
                }}
                valor={"="}
              />
            </div>
          </DivRow>
        </Teclado>
      </CorpoCalculadora>
    </Container>
  );
};

export default Calculator;
