import React from 'react';

//Resources
import '../../scss/partials/footer.scss';
import Profile from '../../img/david.jpg';
import {Phone, Smartphone, Printer, Map} from 'react-feather';



export class Footer extends React.Component {
	render() {
		return (
			<footer>
				<img src={Profile} />
				<div className="inner">
					<ContactInfo />
					<small>Banner image Robert Dickerson "Legal Eagles"<br/>
					© Jennifer Dickerson/Copyright Agency, 2018</small>
				</div>
			</footer>
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