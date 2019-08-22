import React from 'react';
import { Link } from "react-router-dom";

import HeaderStyle from './assets/css/Header.css';
import { linkList } from './pageLinks';
import mainMenu from './linkLists';

class Header extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			menuItem: mainMenu.menuItem,
		};
	}

	renderSubMenu = (menuItem) => {

		//console.log('menuItem '  + menuItem);

		const options = menuItem.map( item => {

			const display   = item.path ? <Link to={item.path}> {item.title} </Link> : <span>{ item.title }</span>;

			let subMenu;

			if (item.submenu && item.submenu.length > 0) {
				subMenu = <ul className="submenu"> {this.renderSubMenu(item.submenu)} </ul>;
			}

			return (
				<li key={item.title}>
					{ display }
					{ subMenu }
				</li>
			);
		});

		return options;
	};


	render() {

		return(
			<div className="site-header-wrap">
				<div className="header-left"><h1><a href="/">Logo</a></h1></div>
				<div className="header-right">
					<nav>
						<ul className='main-menu'>
					        { this.renderSubMenu(this.state.menuItem) }
					      </ul>

						{/*<ul className="main-menu">
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
						</ul>*/}
					</nav>
				</div>
			</div>
		);
	}
}

export default Header;