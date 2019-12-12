import * as types from './types';

export const initialWindowsState = {
  windows: {
    childWindows: {},
    count: 0,
    statuses: [],
  },
};

export const WindowsReducer = (state = initialWindowsState.windows, action) => {
  switch (action.type) {
    case types.CLOSE: {
      const { childWindows } = state;
      const { windowName } = action.payload;
      if (childWindows[windowName]) {
        childWindows[windowName].close();
        delete childWindows[windowName];
      }
      return state;
    }
    case types.SET_WINDOW: {
      const { name } = action.payload;
      return {
        ...state,
        childWindows: {
          name,
          ...state.childWindows,
        },
      };
    }
    case types.ON_CONNECTION: {
      const { statuses } = state;
      const { identity } = action.payload;
      return {
        ...state,
        statuses: statuses.concat({
          msg: `Client connected: ${JSON.stringify(identity)}`,
          name: identity.name,
        }),
      };
    }
    case types.ON_DISCONNECTION: {
      const { statuses } = state;
      const { identity } = action.payload;
      return {
        ...state,
        statuses: statuses.filter(({ name }) => name !== identity.name),
      };
    }
    case types.SET_PUSH_MESSAGE: {
      const { pushMessage } = action.payload;
      return {
        ...state,
        pushMessage,
      };
    }
    default:
      return state;
  }
};
