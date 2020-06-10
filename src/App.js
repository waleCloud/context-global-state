import React, { useContext } from 'react';
import { useAddCount, useReduceCount, useFetchUsers } from './context/hooks';
import { AppContext } from './context';

import './App.css';

const App = () => {
	useFetchUsers();
	const {state: {count, users: {status, data }}} = useContext(AppContext);
	const addCount = useAddCount();
	const reduceCount = useReduceCount();

	return (
		<div className="App">
      <h3>A Data fetching action!</h3>
      <div className="users">
			{status === 'idle' && <div> Fetching Users... </div>}
			{status === 'Error' && <div> Error fetching users from jsonplaceholder.typicode.com </div>}
			{status === 'fetched' &&
				data.map((user) => {
					return (
						<p key={user.id}>
							{user.name} ~
							<span style={{ color: '#808080' }}>
								<small>{user.email}</small>
							</span>
						</p>
					);
				})}
		</div>

        <div className="counter">
          <h3> Simple Counter! </h3>
          <button onClick={addCount}> Add </button> {count} &nbsp;
          <button onClick={reduceCount}> Reduce </button>
        </div>
		</div>
	);
}

export default App;
