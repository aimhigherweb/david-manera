import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-snapshot';
import TagManager from 'react-gtm-module';


//Import components
import { App } from './js/partials/app.js';

//Resources
import './scss/global.scss';

const tagManagerArgs = {
	gtmId: 'GTM-N6P4P6C'
}

TagManager.initialize(tagManagerArgs);


class Main extends React.Component {
	render() {
		return (
			<App />
		);
	}
}

render(<Main />, document.getElementById('root'));
