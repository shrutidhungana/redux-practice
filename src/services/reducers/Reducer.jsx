import { ADD_To_CART } from "../Constants";

const initialState = {
     cardData:[]
 }

const cardItems = (state=initialState,action) => {
    switch (action.type) {
        case ADD_To_CART:
            return {
                ...state,
                cardData: action.data
            }
            break;
        default:
            return {
                state
            }
    }
 }



export default cardItems;