import React from 'react';
import ReactSVG from 'react-svg';

//Resources
import '../../scss/partials/header.scss';
import SiteLogo from '../../img/logo.svg';
import {Phone, Smartphone, Printer, Map, Menu, X} from 'react-feather';

const menuItems = [
	{
		title: 'About',
		slug: '#about'
	},
	{
		title: 'Services',
		slug: '#services'
	},
	{
		title: 'Contact',
		slug: '#contact'
	},
];

export class Header extends React.Component {
	render() {
		return (
			<div className="inner">
				<SiteTitle />
				<a href="#content" className="sr">Skip to content</a>
				<a href="#menu" className="hamburger open"><Menu className="icon" /></a>
				<div id="menu">
					<a href="#" className="hamburger close"><X className="icon" /></a>
					<MainMenu />
					<ContactInfo />
				</div>
			</div>
		);
	}
}

const SiteTitle = () => (
	<div className="site-logo">
		<a aria-label="Logo linked to homepage" title="Logo for David Manera - Criminal Lawyer" href="#content">
			<ReactSVG path={SiteLogo} />
		</a>
	</div>
);

class MainMenu extends React.Component {
	render() {
		let navItems = menuItems.map((navItem) => {
			return (
				<li key={navItem.title}>
					<a href={navItem.slug}>
						{navItem.title}
					</a>
				</li>
			);
		});

		return (
			<nav id="nav-main" className="menu main">
				<ul>{navItems}</ul>
			</nav>
		);
	}
}

const ContactInfo = () => (
	<div className="contact-info">
		<a href="tel:+61892212203" title="Link to contact phone number, will open in new window" target="_blank">
			<Phone className="icon" />
			<span>08 9221 2203</span>
		</a>
		<a href="tel:+61419945411" title="Link to contact mobile number, will open in new window" target="_blank">
			<Smartphone className="icon" />
			<span>0419 945 411</span>
		</a>
		<a href="fax:+61892212538" title="Link to contact fax number, will open in new window" target="_blank">
			<Printer className="icon" />
			<span>08 9221 2538</span>
		</a>
		<a href="https://goo.gl/maps/MLgLZnpJ3kq" title="Link to Google Maps listing of office address, will open in new window" target="_blank">
			<Map className="icon map" />
			<address>
				524 Hay ST<br/>
				Perth, WA, 6000
			</address>
		</a>
	</div>
);