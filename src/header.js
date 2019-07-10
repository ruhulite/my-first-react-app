import React from 'react';
import HeaderStyle from './assets/css/Header.css';
import { Link } from "react-router-dom";
import { linkList } from './pageLinks';
import mainMenu from './linkLists';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItem: mainMenu.menuItem,
		};
	}

	

	render() {
		const {menuItem} = this.state;

		return(
			<div className="site-header-wrap">
				<div className="header-left"><h1><a href="/">Logo</a></h1></div>
				<div className="header-right">
					<nav>
						

						<ul className="main-menu">
							{menuItem.map(({path, title, submenu}, index) =>
							    <li key={title}>
							    	<Link to={path} key={title}> {title} </Link>
							    	{submenu && submenu.length > 0 ? 
								    	<ul className="submenu">
								    		<li key={title}>
												{submenu.map(({path, title}, index) =>
													<Link to={path} key={index}> {title} </Link>
												)}
											</li>
										</ul>
									: null
									}
							    </li>
							)}
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Header;