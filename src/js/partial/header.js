import React from 'react';

//Resources
import '../../scss/partials/header.scss';

const menuItems = [];

export class Header extends React.Component {
	render() {
		return (
			<div className="inner">
				<SiteTitle />
				<MainMenu />
			</div>
		);
	}
}

const SiteTitle = (logo) => (
	<div className="site-logo">
		<a aria-label="Logo linked to homepage" href="/">
		</a>
	</div>
);

class MainMenu extends React.Component {
	mobileMenu() {
		if (document.getElementsByClassName('main menu active').length < 1) {
			document.getElementById('nav-main').classList.add('active');
		} else {
			document.getElementById('nav-main').classList.remove('active');
		}
	}

	render() {
		let navItems = menuItems.map((navItem) => {
			return (
				<li key={navItem.title} className={'' + navItem.class}>
					<a href={navItem.slug}>
						{navItem.title}
					</a>
				</li>
			);
		});

		return (
			<nav id="nav-main" className="menu main">
				<a className="hamburger" onClick={this.mobileMenu}>
				</a>
				<ul>{navItems}</ul>
			</nav>
		);
	}
}
