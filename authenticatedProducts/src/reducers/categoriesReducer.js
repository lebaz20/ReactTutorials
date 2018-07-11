import { FETCH_CATEGORIES_RECEIVE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_RECEIVE:
      return action.payload;

    default:
      return state;
  }
};
