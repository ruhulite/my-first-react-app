import React from 'react';
import HeaderStyle from './assets/css/Header.css';
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
							{linkList.map(({path, linkName, submenu1}, index) =>
							    <li>
							    	<Link to={path} key = {index}> {linkName} </Link>
							    	{submenu1 ? 
								    	<ul className="submenu">											
											{submenu1.map(({path, title, submenu2}, index) =>
												<li>
													<Link to={path} key = {index}> {title} </Link>
													{submenu2 ? 
												    	<ul className="submenu">											
															{submenu2.map(({path, title, submenu3}, index) =>
																<li>
																	<Link to={path} key = {index}> {title} </Link>
																	{submenu3 ? 
																    	<ul className="submenu">											
																			{submenu3.map(({path, title, submenu3}, index) =>
																				<li><Link to={path} key = {index}> {title} </Link></li>
																			)}											
																		</ul>
																	: null
																	}
																</li>
															)}											
														</ul>
													: null
													}
												</li>
											)}											
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