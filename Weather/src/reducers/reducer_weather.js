import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // concat doesn't mutate!
    // DON'T MUTATE STATE!
    // return state.concat([ action.payload.data ]);
    // but here is a shorter way:
    return [ action.payload.data, ...state];
  }
  return state;
}
