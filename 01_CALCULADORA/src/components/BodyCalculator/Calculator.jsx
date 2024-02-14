// /src/components/Calculator.js
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
  const [valorCapturado, setValorCapturado] = useState("");
  const teste = 10;//Para testa
  const atualizarValorCapturado = (valor) => {
    setValorCapturado((prevCapturado) => prevCapturado + valor);
   
  };
 console.log(Number(valorCapturado) + teste);

  return (
    <Container>
      <CorpoCalculadora>
        <Display>
          <Operacao>
            <Resultado>{'123456789'}</Resultado>

            <Caculo>{valorCapturado}</Caculo>
          </Operacao>
        </Display>
        <Teclado>
          <div>
            <Button valor={"AC"} atualizarValor={atualizarValorCapturado} />
            <Button
              styles={{ color: theme.colors.botaoRoxo }}
              valor={`\u00F7`}
              atualizarValor={atualizarValorCapturado}
            />
            <Button valor={"X"} atualizarValor={atualizarValorCapturado} />
            <Button
              styles={{
                color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo,
              }}
              valor={" ⇐"}
              atualizarValor={atualizarValorCapturado}
            />
          </div>
          <div>
            <Button
              styles={{ color: theme.colors.white }}
              valor={"7"}
              atualizarValor={atualizarValorCapturado}
            />
            <Button
              styles={{ color: theme.colors.white }}
              valor={"8"}
              atualizarValor={atualizarValorCapturado}
            />
            <Button
              styles={{ color: theme.colors.white }}
              valor={"9"}
              atualizarValor={atualizarValorCapturado}
            />
            <Button
              styles={{
                color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo,
              }}
              valor={"-"}
              atualizarValor={atualizarValorCapturado}
            />
          </div>
          <div>
            <Button
              styles={{ color: theme.colors.white }}
              valor={"4"}
              atualizarValor={atualizarValorCapturado}
            />
            <Button
              styles={{ color: theme.colors.white }}
              valor={"5"}
              atualizarValor={atualizarValorCapturado}
            />
            <Button
              styles={{ color: theme.colors.white }}
              valor={"6"}
              atualizarValor={atualizarValorCapturado}
            />
            <Button
              styles={{
                color: theme.colors.white,
                backgroundColor: theme.colors.botaoRoxo,
              }}
              valor={"+"}
              atualizarValor={atualizarValorCapturado}
            />
          </div>
          <DivRow>
            <DivButao>
              <div>
                <Button
                  styles={{ color: theme.colors.white }}
                  valor={"1"}
                  atualizarValor={atualizarValorCapturado}
                />
                <Button
                  styles={{ color: theme.colors.white }}
                  valor={"2"}
                  atualizarValor={atualizarValorCapturado}
                />
                <Button
                  styles={{ color: theme.colors.white }}
                  valor={"3"}
                  atualizarValor={atualizarValorCapturado}
                />
              </div>
              <div>
                <Button
                  styles={{ color: theme.colors.white }}
                  valor={"0"}
                  atualizarValor={atualizarValorCapturado}
                />
                <Button
                  styles={{ color: theme.colors.white }}
                  valor={"."}
                  atualizarValor={atualizarValorCapturado}
                />
                <Button
                  styles={{ color: theme.colors.white }}
                  valor={"%"}
                  atualizarValor={atualizarValorCapturado}
                />
              </div>
            </DivButao>
            <div>
              <Button
                styles={{
                  color: theme.colors.white,
                  height: "150px",
                  backgroundColor: theme.colors.botaoRoxo,
                }}
                valor={"="}
                atualizarValor={atualizarValorCapturado}
              />
            </div>
          </DivRow>
        </Teclado>
      </CorpoCalculadora>
    </Container>
  );
};

export default Calculator;
