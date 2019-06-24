import React from 'react';
import HeaderStyle from './Header.css';
import { Link } from "react-router-dom";
import { linkList } from './pageLinks';


class Header extends React.Component {
	render() {
		return(
			<div className="site-header-wrap">
				<div className="header-left"><h1><a href="/">Logo</a></h1></div>
				<div className="header-right">
					<nav>
						<ul className="main-menu">
							{linkList.map(({path, linkName}, index) =>
							    <Link to={path} key = {index}> {linkName} </Link>
							)}
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Header;