// CalculatorStyles.jsx
import styled from "styled-components";
import theme from "../../styles/Variables/VAriables";

export const Title = styled.h1``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.bluePrimary};
`;

export const CalculatorStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 550px;
  background-color: ${theme.colors.blueDark};
  border-radius: 10px;
  box-shadow: 1px 1px 2px 2px black;
`;
export const Display = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 380px;
  background-color: ${theme.colors.lightGrayBackground};
  margin-top: 15px;
  border-radius: 8px;
`;

export const DisplayResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 380px;
  background-color: ${theme.colors.lightGrayBackground};
  margin-top: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const DisplayInput = styled.input`
  width: 380px;
  height: 50px;
  border-radius: 8px;
  font-size: 30px;
  text-align: end;
  font-weight: 700;
`
