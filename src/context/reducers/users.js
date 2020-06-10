export const users = (state, action) => {
	switch (action.type) {
		case 'FETCHING_USERS':
			return { ...state, status: 'fetching' };
		case 'FETCHED_USERS':
			return { 
				...state,
					status: action.payload.status,
					data: action.payload.data 
			};
		default:
			return state;
	}
};
