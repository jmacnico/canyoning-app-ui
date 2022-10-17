import React from 'react'
import './style.css';
import { sum } from './calc';

const App = ({ onClick }: { onClick: () => void }) => {
	return (
		<>
			<div>{`App xpto1 ${sum(4, 5)}`}</div>
			<button onClick={onClick}>Teste</button>
		</>
	)
}

export default App