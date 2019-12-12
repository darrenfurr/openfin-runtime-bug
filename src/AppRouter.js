import React, { Suspense, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import useCombinedReducers from 'hooks/useCombinedReducers';
import { CounterReducer, initialCounterState } from 'store/counter/reducers';
import { WindowsReducer, initialWindowsState } from 'store/windows/reducers';
import { DispatchContext, StateContext } from 'store/context';
import Home from 'routes/Home';
import Example from 'routes/Example';
import theme from 'theme';

export const AppRouter = () => {
  const [ state, dispatch ] = useCombinedReducers({
    counter: useReducer(CounterReducer, initialCounterState.counter),
    windows: useReducer(WindowsReducer, initialWindowsState.windows),
  });

  return (
    <Suspense fallback={<div>...Loading</div>}>
      <DispatchContext.Provider value={{ dispatch }}>
        <StateContext.Provider value={{ state }}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/example/:id" component={Example} exact />
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </Suspense>
  );
};

export default AppRouter;
