import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

//Resources
// import '../../scss/layouts/home.scss';
import Profile from '../../img/profile_david.jpeg';

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
	<div id="home" className="hero">
		<div className="image-container hero"></div>
		<div className="headline">
			<blockquote>
				David Manera is a Perth based lawyer specialising in criminal law and practices throughout Western Australia
			</blockquote>
			<blockquote>
				He has over 30 years of experience representing clients in all courts
			</blockquote>
			<blockquote>
				David is committed to providing a professional service and achieving the best result.
			</blockquote>
		</div>
	</div>
);

const About = () => (
	<div id="about" className="about">
		<div className="image-container">
			<img src={Profile} alt="Profile Image of David Manera" />
		</div>
		<div className="content">
			<h2>About David</h2>
			<ul>
				<li>Admitted to the Supreme Court of WA in 1987</li>
				<li>Admitted to the High Court in 1988 </li>
				<li>Criminal Lawyer with 30 years of experience</li>
				<li>Ex Vice-President for 10 years of <a href="https://www.visability.com.au/" target="_blank" rel="nofollow">VisAbility</a> (formerly association for the blind)</li>
				<li>Legal representative for <a href="https://www.pdl.org.au/" target="_blank" rel="nofollow">Pharmacy Defence Limited</a> for 10 years (the body representing retail pharmacists)</li>
			</ul>
		</div>
	</div>
);

const Services = () => (
	<div id="services" className="services">
		<div className="content">
			<h2>Services</h2>
			<p>David specialises in the following areas:</p>
			<ul>
				<li>Drug offences</li>
				<li>Arson and Criminal damage</li>
				<li>Firearm and Ammunition offences</li>
				<li>Dishonesty offences</li>
				<li>Sex offences</li>
				<li>Burglary offences</li>
				<li>Restraining orders</li>
				<li>Online offences</li>
				<li>Appeals</li>
				<li>Bail Applications</li>
			</ul>
		</div>
		<div className="image-container"></div>
	</div>
);

const Contact = () => (
	<div id="contact" className="contact">
		<div className="map">
			<iframe src="https://snazzymaps.com/embed/59209" width="100%" height="100%"></iframe>
		</div>
		<div className="form">
			<h2>Contact David</h2>
			<form name="contact" method="POST" netlify="true">
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="phone" placeholder="Phone" />
				<input type="email" name="email" placeholder="Email" />
				<textarea name="message"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	</div>
);