import styled from "styled-components";
import theme from "../styles/Variables/Variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 20px);
  background: linear-gradient(
    to bottom right,
    ${theme.colors.roxoEscuro},
    ${theme.colors.roxoClaro}
  );
  padding-bottom: 20px;
`;
