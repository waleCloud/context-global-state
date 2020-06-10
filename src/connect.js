import React, {useReducer, useMemo} from 'react';
import { AppContext } from './context';
import { reducer } from './context/reducers';

const initialState = {
	count: 0,
	users: {
		status: 'idle',
		data: [],
	},
};

export const ConnectApp = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storeValue = useMemo(() => ({ dispatch, state }), [dispatch, state]);
  return (
    <AppContext.Provider value={storeValue}>
      {props.children}
    </AppContext.Provider>
  );
};
