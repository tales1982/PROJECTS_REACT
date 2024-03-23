import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selectors";


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  //REDUX
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productCount = useSelector(selectProductsCount);
  const dispatch = useDispatch();

  //REDUX DO LOGIN
  const alterando_nome_do_Login = () => {
    dispatch(loginUser({ name: "Tales", email: "tales@gmail.com" }));
  };

  //REDUX DO LOGOUT
  const fazendo_logout = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={fazendo_logout}> Sair</div>
        ) : (
          <div onClick={alterando_nome_do_Login}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho {productCount} iten(s)</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
