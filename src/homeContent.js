import React from 'react';

function linkClickhandler(e) {
	e.preventDefault();
	alert('Link Clicked!');
}

class Content extends React.Component {
	
	buttonClickHandler = () => {
		alert('Button Clicked!');
	}

	constructor (props) {
		super(props);
		this.state = {isloggedIn: false};
	}

	loginClickHandler = () => {
		//alert('1');
		const isloggedIn = this.state.isloggedIn;
		//alert('isloggedIn' +  isloggedIn);
		if (!isloggedIn) {
			//handlelogin();
			this.setState ({isloggedIn: true});
			//alert('2');
		} else {
			//handlelogout();
			this.setState ({isloggedIn: false});
			//alert('3');
		}
	}

	render() {
		const isloggedIn = this.state.isloggedIn;
		let buttonText;
		if(isloggedIn) {
			buttonText = 'Click for Log out';
		} else {
			buttonText = 'Click for Login';
		}
		
		return(
			<div>
				<section className="home-main-content">
					<h3>Home Content title...</h3>
					<a href="#" onClick={linkClickhandler}>Click the link.</a><br /><br />
					<button onClick={this.buttonClickHandler}>Click the button</button><br /><br />
					<button onClick={this.loginClickHandler}>{buttonText}</button>
				</section>
			</div>
		);
	}
}

export default Content;