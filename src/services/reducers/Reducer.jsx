import { ADD_TO_CART,REMOVE_FROM_CART } from '../Constants'

export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        
        case REMOVE_FROM_CART:
            state.pop()
            return [
                ...state,
            ]
        default:
            return state
    }


}