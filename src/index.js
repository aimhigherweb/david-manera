import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-snapshot';


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

render(<Main />, document.getElementById('root'));
