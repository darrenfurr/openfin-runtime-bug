import { createContext, useContext } from 'react';

export const DispatchContext = createContext();
export const StateContext = createContext();

/* ***********************************************
 * Access state and dispatch in child components
 * Usage:
 *  const { dispatch } = useDispatchContext()
 *  const { state } = useStateContext()
 ********************************************** */
export const useDispatchContext = () => useContext(DispatchContext);
export const useStateContext = () => useContext(StateContext);
