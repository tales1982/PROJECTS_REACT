// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles"; 

const Buttons = ({ number, style }) => {
  return <Button style={style}>{number}</Button>;
};

Buttons.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};

export default Buttons;
