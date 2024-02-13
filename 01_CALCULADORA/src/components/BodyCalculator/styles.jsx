// CalculatorStyles.jsx
import styled from "styled-components";
import theme from "../../styles/Variables/Variables";

export const Title = styled.h1``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    ${theme.colors.roxoEscuro},
    ${theme.colors.roxoClaro}
  );
`;

export const CorpoCalculadora = styled.div`
  height: 550px;
  width: 300px;
  border: 4px solid white;
  border-radius: 20px;
  overflow: hidden;
`;

export const Display = styled.div`
  width: 300px;
  height: 180px;
  background-color: ${theme.colors.dispay};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: red;
  color: #fff;
  text-align: end;
`;

export const Operacao = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  height: 100%;
  padding-right: 10px;
  font-size: 20px;
`;

export const Caculo = styled.span`
  font-size: 28px;
  margin-top: 30px;
`

export const Resultado = styled.span`
  font-size: 43px;
  overflow: hidden;
`
export const Teclado = styled.div`
  width: 300px;

`

export const DivButao = styled.div`
  display: flex;
  flex-direction: column;
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
`