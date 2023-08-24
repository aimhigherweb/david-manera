import React from 'react';

//Resources
import '../../scss/partials/header.scss';
import Painting from '../../img/image002.jpg';



export class Header extends React.Component {
	render() {
		return (
			<header>
				<Hero />
				<h1>David Manera Barrister and Solicitor</h1>
				<blockquote>David Manera is a Perth-based lawyer specialising in Criminal Law practising throughout Western Australia </blockquote>
			</header>
		);
	}
}

const Hero = () => (
	<div className="hero">
		<img src={Painting} />
	</div>
);
