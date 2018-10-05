import { ADD_TO_CART, REMOVE_TO_CART } from '../../constants';

export const addToCart = (item) => dispatch => dispatch({ type: ADD_TO_CART, payload: item });

export const removeToCart = (item) => dispatch => dispatch({ type: REMOVE_TO_CART, payload: item });