import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApiService from './services/apiService';

ApiService.init().then(() => {
	ReactDOM.render(

		<React.StrictMode>
			<App />
		</React.StrictMode>,

		document.getElementById('root')
	);
});
