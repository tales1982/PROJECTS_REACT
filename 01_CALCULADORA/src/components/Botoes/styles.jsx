import styled from "styled-components";
import theme from "../../styles/Variables/Variables";

export const Button = styled.button`
  margin: 3px;
  width: 70px;
  height: 60px;
  background-color: ${theme.colors.orangeButton};
  color: ${theme.colors.white};
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:active {
    background-color: ${theme.colors.redButton}; 
    
  }

`;
