import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

//Resources
import '../../scss/layouts/home.scss';
import Profile from '../../img/profile_david.jpeg';
import CourtSupreme from '../../img/court_supreme.jpg';
import CourtDistrict from '../../img/court_district.jpg';

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
			<div id="content" className="content main">
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
		<div className="image-container hero-image">
			<img src={CourtSupreme} alt="Image of the front of the Supreme Court building in Perth, WA. Includes sign at the front and part of the Supreme Court Gardens." />
		</div>
		<div className="headline">
			<h1>
				<span className="caps">David Manera</span> is a Perth based lawyer with over 30 years of experience
			</h1>
			<blockquote>
				David specialises in Criminal Law and practices throughout Western Australia	
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
				<li>Ex Vice-President for 10 years of <a href="https://www.visability.com.au/" target="_blank" rel="nofollow">VisAbility</a> (formerly Association for the Blind WA)</li>
				<li>Legal representative for <a href="https://www.pdl.org.au/" target="_blank" rel="nofollow">Pharmacy Defence Limited</a> for 10 years (the body representing retail pharmacists)</li>
				<li>Member of the North Cottesloe Surf Club for over 25 years</li>
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
		<div className="image-container">
			<img src={CourtDistrict} alt="Image of the front of the District Court building in Perth, WA." />
		</div>
	</div>
);

const Contact = () => (
	<div id="contact" className="contact">
		<div className="map">
			<iframe src="https://snazzymaps.com/embed/59209" width="100%" height="100%"></iframe>
		</div>
		<div className="form">
			<h2>Contact David</h2>
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
	</div>
);