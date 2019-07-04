import HomeContent from './home';
import AboutContent from './about';
import ServiceContent from './service';

export const linkList = [
					{exact: true, path: '/', linkName: 'home', component: HomeContent, 
						submenu1: [
							{path: 'home-submenu-1', title: 'Home Submenu 1'},
							{path: 'home-submenu-2', title: 'Home Submenu 2',
								submenu2: [
									{path: 'home-submenu-1-1', title: 'Home Submenu 1-1'},
									{path: 'home-submenu-1-2', title: 'Home Submenu 1-2',
										submenu3: [
											{path: 'home-submenu-1-1-1', title: 'Home Submenu 1-1-1'},
											{path: 'home-submenu-1-1-2', title: 'Home Submenu 1-1-2'},
											{path: 'home-submenu-1-1-3', title: 'Home Submenu 1-1-3'},
										],
								},
									{path: 'home-submenu-1-3', title: 'Home Submenu 1-3'},
								],
							},
							{path: 'home-submenu-3', title: 'Home Submenu 3'},
							{path: 'home-submenu-4', title: 'Home Submenu 4'},
							{path: 'home-submenu-5', title: 'Home Submenu 5'},
						],
					}, 
					{exact: false, path: '/about', linkName: 'about', component: AboutContent}, 
					{exact: false, path: '/service', linkName: 'service', component: ServiceContent},
					{exact: false, path: '/contact-us', linkName: 'contact us', component: ServiceContent},
				];