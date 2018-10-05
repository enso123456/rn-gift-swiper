import { ADD_TO_CART, REMOVE_TO_CART } from '../../constants';

const initialState = {
  carts: []
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload]
      }

    case REMOVE_TO_CART:
      console.log(action.payload)
      return {
        ...state,
        carts: state.carts.filter(cart => cart.name != action.payload.toString())
      }

    default:
      return initialState;
  }
}