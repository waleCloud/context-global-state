import { useContext, useCallback } from 'react';
import { AppContext } from '../';

export const useAddCount = () => {
  const { dispatch } = useContext(AppContext);

  return useCallback(() => (
    dispatch({ type: 'INCREMENT_COUNT' })
  ),[dispatch])
};

export const useReduceCount = () => {
	const { dispatch } = useContext(AppContext);

  return useCallback(() => (
    dispatch({ type: 'DECREMENT_COUNT' })
  ),[dispatch])
};
