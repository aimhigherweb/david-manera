import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//Import components
import { App } from './js/partials/app.js';

//Resources
import './scss/global.scss';

class Main extends React.Component {
	render() {
		return (
			<App />
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
