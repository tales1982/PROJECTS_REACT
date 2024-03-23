import CartActionTypes from "./actions-types";

export const addProductToCard = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
})

export const inclementProductItem = (payload) => ({
    type: CartActionTypes.INCLEMENT_PRODUCT_ITEM,
    payload,
})

export const decrementProductItem = (payload) => ({
    type: CartActionTypes.DECREMENT_PRODUCT_ITEM,
    payload,
})

