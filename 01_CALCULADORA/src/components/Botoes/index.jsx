// /src/components/Button.js
import PropTypes from "prop-types"; // Importe o PropTypes
import { ButtonStyled } from "./styles";

const Button = ({ valor, styles, atualizarValor }) => {
  return (
    <ButtonStyled style={styles} onClick={() => atualizarValor(valor)}>
      {valor}
    </ButtonStyled>
  );
};

// Adicione a validação de tipo para as propriedades
Button.propTypes = {
  valor: PropTypes.string.isRequired,
  styles: PropTypes.object,
  atualizarValor: PropTypes.func.isRequired,
};

export default Button;
