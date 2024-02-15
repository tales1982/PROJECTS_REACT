// /src/components/Button.js
import PropTypes from "prop-types"; // Importe o PropTypes
import { ButtonStyled } from "./styles";

const Button = ({ valor, styles, click }) => {
  return (
    <ButtonStyled onClick={(e) => click(e.target.innerHTML)} style={styles}>
      {valor}
    </ButtonStyled>
  );
};

// Adicione a validação de tipo para as propriedades
Button.propTypes = {
  valor: PropTypes.string.isRequired,
  styles: PropTypes.object,
  click: PropTypes.func,
};

export default Button;
