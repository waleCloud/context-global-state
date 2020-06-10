import {count} from './count';
import {users} from './users';

export const combineReducers = (reducers) => {
	return (state={}, action) => {
		return Object.keys(reducers).reduce(
			(nextState, key) => {
				nextState[key] = reducers[key](state[key], action);
				return nextState;
			},
			{}
		);
	};
};

export const reducer = combineReducers({ users, count });
