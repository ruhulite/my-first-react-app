import React from 'react';
import HeaderStyle from './Header.css';

class Header extends React.Component {
	render() {
		return(
			<div className="site-header-wrap">
				<div className="header-left"><h1>Logo</h1></div>
				<div className="header-right">header right area.</div>
			</div>
		);
	}
}

export default Header;