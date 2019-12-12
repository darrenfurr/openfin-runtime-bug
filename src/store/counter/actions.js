import * as types from './types';

const increment = () => ({
  type: types.INCREMENT,
  payload: {},
});

const decrement = () => ({
  type: types.DECREMENT,
  payload: {},
});

export default {
  increment,
  decrement,
};
