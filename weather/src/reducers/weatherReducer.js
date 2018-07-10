import { FETCH_WEATHER_RECEIVE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER_RECEIVE:
      return [action.payload, ...state];

    default:
      return state;
  }
};
