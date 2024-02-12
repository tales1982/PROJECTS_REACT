import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles";

const Buttons = ({ number, style, onClick }) => {
  return <Button style={style} onClick={() => onClick(number)}>{number}</Button>;
};

Buttons.propTypes = {
  onClick: PropTypes.func, // Correção aqui
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};

export default Buttons;
