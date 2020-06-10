import { useContext, useCallback, useEffect } from 'react';
import { AppContext } from '../';

export const useFetchUsers = () => {
	const { dispatch } = useContext(AppContext);
	
	const load =  useCallback(async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();

			dispatch({ type: 'FETCHED_USERS', payload: {status: 'fetched', data} });
		} catch (error) {
			dispatch({ type: 'ERROR' });
		}
	}, [dispatch]);

	useEffect(() => {
    load();
	}, [load]);

}
