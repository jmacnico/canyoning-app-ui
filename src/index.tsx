import { createRoot } from "react-dom/client";
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!)

const onClick = (): void => {
	console.log('Teste')
}

root.render(<App onClick={onClick}/>);