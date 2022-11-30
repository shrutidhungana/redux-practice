import { ADD_To_CART, REMOVE_FROM_CART } from "../Constants"
export const addToCart = (data) => {
    return {
        data: data,
        type: ADD_To_CART
    }
}

export const removeFromCart = (data) => {
    return {
        data: data,
        type: REMOVE_FROM_CART
    }
}


