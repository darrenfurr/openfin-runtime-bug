import * as types from './types';

export const initialCounterState = {
  counter: {
    count: 0,
  },
};

export const CounterReducer = (state = initialCounterState.counter, action) => {
  switch (action.type) {
    case types.DECREMENT:
      return { ...state, count: state.count - 1 };
    case types.INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    default:
      return state;
  }
};
