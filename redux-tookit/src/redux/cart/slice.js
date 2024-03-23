import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // 1° verificar se o produto já está no carrinho
      const produtoJaEstaNoCarrinho = state.products.some(
        (product) => product.id === action.payload.id
      );
      // 2° se ele estiver, aumentar sua quantidade em 1
      if (produtoJaEstaNoCarrinho) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }
      // 3° se ele não estiver, adicioná-lo
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    inclementProductItem: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    removeProductFromCart: (state, action) => {
      // Aqui deve ser !== para remover o produto, em vez de ===
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    decrementProductItem: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
  },
});

export const {
  addProduct,
  inclementProductItem,
  removeProductFromCart,
  decrementProductItem,
} = cartSlice.actions;

export default cartSlice.reducer;
