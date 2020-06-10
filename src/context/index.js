import { createContext } from 'react';

const initialState = {
	count: 0,
	users: {
		status: 'idle',
		data: [],
	},
};

export const AppContext = createContext({
  dispatch: () => undefined,
  state: initialState,
});
