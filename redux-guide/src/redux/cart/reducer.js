import CartActionTypes from "./actions-types";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      // 1° verificar se o produto ja esta no carrinho
      const produtoJaEstaNoCarrinho = state.products.some(
        (products) => products.id === action.payload.id
      );
      // 2° se ele estiver almentar sua quantidade em 1
      if (produtoJaEstaNoCarrinho) {
        return {
          ...state,
          products: state.products.map((products) =>
            products.id === action.payload.id
              ? { ...products, quantity: products.quantity + 1 }
              : products
          ),
        };
      }
      // 3° se ele nao estiver adcionalo
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (products) => products.id === action.payload
        ),
      };
    case CartActionTypes.INCLEMENT_PRODUCT_ITEM:
      return {
        ...state,
        products: state.products.map((products) =>
          products.id === action.payload
            ? { ...products, quantity: products.quantity + 1 }
            : products
        ),
      };
    case CartActionTypes.DECREMENT_PRODUCT_ITEM:
      return {
        ...state,
        products: state.products.map((products) =>
          products.id === action.payload
            ? { ...products, quantity: products.quantity - 1 }
            : products
        ).filter(products => products.quantity > 0),
      };
    default:
      return state;
  }
};

export default cartReducer;
