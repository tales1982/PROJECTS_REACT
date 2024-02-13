// eslint-disable-next-line no-unused-vars
import React from "react";
import { ButtonStyled } from "./styles";

// eslint-disable-next-line react/prop-types
const Button = ({ valor, styles }) => {
  return <ButtonStyled style={styles}>{valor}</ButtonStyled>;
};

export default Button;
