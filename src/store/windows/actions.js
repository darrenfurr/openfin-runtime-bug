import * as types from './types';

export const close = windowName => ({
  type: types.CLOSE,
  payload: { windowName },
});

export const setWindow = name => ({
  type: types.SET_WINDOW,
  payload: { name },
});

export const onConnection = identity => ({
  type: types.ON_CONNECTION,
  payload: { identity },
});

export const onDisconnection = identity => ({
  type: types.ON_DISCONNECTION,
  payload: { identity },
});

export const setPushMessage = pushMessage => ({
  type: types.SET_PUSH_MESSAGE,
  payload: { pushMessage },
});

export default {
  close,
  setWindow,
  onConnection,
  onDisconnection,
  setPushMessage,
};
