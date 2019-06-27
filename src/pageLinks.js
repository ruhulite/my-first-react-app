import HomeContent from './home';
import AboutContent from './about';
import ServiceContent from './service';

export const linkList = [
					{exact: true, path: '/', linkName: 'home', component: HomeContent}, 
					{exact: false, path: '/about', linkName: 'about', component: AboutContent}, 
					{exact: false, path: '/service', linkName: 'service', component: ServiceContent},
					{exact: false, path: '/contact-us', linkName: 'contact us', component: ServiceContent},
				];