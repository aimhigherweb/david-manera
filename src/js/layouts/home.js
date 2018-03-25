import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

//Resources
// import '../../scss/layouts/home.scss';

class Meta extends Component {
	render() {
		let name = 'David Manera | Criminal Lawyer';
		let description = 'Perth based lawyer specialising in criminal law and practices throughout Western Australia';
		let image = '';
		return (
			<Helmet>
				<title>{name}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href="https://davidmanera.com.au/" />

				{/* Facebook */}
				<meta property="og:url" content="https://davidmanera.com.au/" />
				<meta property="og:title" content={name} />
				<meta property="og:image" content={image} />
				<meta property="og:description" content={description} />

				{/* Twitter */}
				<meta name="twitter:url" content="https://davidmanera.com.au/" />
				<meta name="twitter:title" content={name} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
			</Helmet>
		);
	}
}

export class Home extends Component {
	render() {
		return (
			<div className="content main">
				<Hero />
				<About />
				<Services />
				<Contact />
			</div>
		);
	}
}

const Hero = () => (
	<div id="home" className="hero"></div>
);

const About = () => (
	<div id="about" className="about"></div>
);

const Services = () => (
	<div id="services" className="services"></div>
);

const Contact = () => (
	<div id="contact" className="contact"></div>
);