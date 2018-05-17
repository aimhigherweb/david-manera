import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Media from 'react-media';

//Resources
import '../../scss/layouts/home.scss';


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
			<div className="main">
				<About />
				<Services />
				<Contact />
			</div>
		);
	}
}

const About = () => (
	<div className="about content">
		<h2>About David</h2>
		<p>David has over 30 years of experience representing clients in all courts. He is committed to providing a professional service and achieving the best result.</p>
		<ul>
			<li><span>Admitted to the Supreme Court of WA in 1987</span></li>
			<li><span>Admitted to the High Court in 1988 </span></li>
			<li><span>Criminal Lawyer with 30 years of experience</span></li>
			<li><span>Ex Vice-President for 10 years of <a href="https://www.visability.com.au/" target="_blank" rel="nofollow">VisAbility</a> (formerly Association for the Blind WA)</span></li>
			<li><span>Legal representative for <a href="https://www.pdl.org.au/" target="_blank" rel="nofollow">Pharmacy Defence Limited</a> for 10 years (the body representing retail pharmacists)</span></li>
			<li><span>Member of the North Cottesloe Surf Club for over 25 years</span></li>
		</ul>
	</div>
);

const Services = () => (
	<div className="services content">
		<h2>Services</h2>
		<p>David specialises in the following areas:</p>
		<ul>
			<li><span>Drug offences</span></li>
			<li><span>Arson and Criminal damage</span></li>
			<li><span>Firearm and Ammunition offences</span></li>
			<li><span>Dishonesty offences</span></li>
			<li><span>Sex offences</span></li>
			<li><span>Burglary offences</span></li>
			<li><span>Restraining orders</span></li>
			<li><span>Online offences</span></li>
			<li><span>Appeals</span></li>
			<li><span>Bail Applications</span></li>
		</ul>
	</div>
);

const Contact = () => (
	<div className="contact content">
		<h2>Contact David</h2>
		<div className="form">
				<form name="contact" method="POST" >
					<input type="hidden" name="form-name" value="contact-html" />
					<label htmlFor="name" className="sr">Name</label>
					<input if="name" type="text" name="name" placeholder="Name" />
					<label htmlFor="phone" className="sr">Phone</label>
					<input id="phone" type="text" name="phone" placeholder="Phone" />
					<label htmlFor="email" className="sr">Email</label>
					<input id="email" type="email" name="email" placeholder="Email" />
					<label htmlFor="message" className="sr">Message</label>
					<textarea id="message" name="message"></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
		<div className="map">
			<iframe src="https://snazzymaps.com/embed/59209" width="100%" height="100%"></iframe>
		</div>
	</div>
);