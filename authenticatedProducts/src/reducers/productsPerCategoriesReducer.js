import { FETCH_PRODUCTS_RECEIVE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_RECEIVE:
      return action.payload;

    default:
      return state;
  }
};
