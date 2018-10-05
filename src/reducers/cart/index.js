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
      return state.carts.filter(cart => cart.id != action.payload);

    default:
      return initialState;
  }
}