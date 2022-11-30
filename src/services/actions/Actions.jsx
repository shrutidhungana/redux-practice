import { ADD_To_CART } from "../Constants"
export const addToCart = (data) => {
    return {
        data: data,
        type: ADD_To_CART
    }
}