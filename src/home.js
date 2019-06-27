import React from 'react';
import homeContentStyle from './assets/css/home-content-style.css';

function linkClickhandler(e) {
	e.preventDefault();
	alert('Link Clicked!');
}

const personInfo = [
					{age: 20, fname: 'Ruhul Amin', lname: 'Khan', department: 'IT', company: 'EchoTechSys'},
					{age: 21, fname: 'Mohammad', lname: 'Hafeez', department: 'Graphics', company: 'EchoTechSys'},
					{age: 22, fname: 'Mohammad', lname: 'Tuhin', department: 'IT', company: 'EchoTechSys'},
					{age: 23, fname: 'Monirul', lname: 'Islam', department: 'IT', company: 'EchoTechSys'},
					{age: 24, fname: 'Zahidul', lname: 'Islam', department: 'IT', company: 'EchoTechSys'},
					{age: 25, fname: 'Saeef', lname: 'Nada', department: 'IT', company: 'EchoTechSys'},
					{age: 29, fname: 'Mehedi', lname: 'Hasan', department: 'IT', company: 'EchoTechSys'},
					{age: 28, fname: 'Mushfiqur', lname: 'Rahman', department: 'IT', company: 'EchoTechSys'},
					{age: 27, fname: 'Arman', lname: 'Ali', department: 'IT', company: 'EchoTechSys'},
					{age: 26, fname: 'Tanbir', lname: 'Islam', department: 'IT', company: 'EchoTechSys'},
					{age: 25, fname: 'Tonni', lname: 'Dhongi', department: 'IT', company: 'EchoTechSys'},
					{age: 24, fname: 'Rubayet', lname: 'Imran', department: 'QA', company: 'EchoTechSys'},
					{age: 23, fname: 'Eqramuzzaman', lname: '', department: 'IT', company: 'EchoTechSys'},
					{age: 22, fname: 'Nabil', lname: 'Islam', department: 'IT', company: 'EchoTechSys'},
					{age: 21, fname: 'Mathew', lname: 'Matt', department: 'IT', company: 'EchoTechSys'},
				];

class HomeContent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isloggedIn: false, 
			id: null, 
			firstName: '',
			lastName: '',
			age: '',
			department: '',
			company: '',
		};
		this.employeeInfoSubmitHandler = this.employeeInfoSubmitHandler.bind(this);
		//this.fieldValueHandler = this.fieldValueHandler.bind(this);
	}

	buttonClickHandler = () => {
		alert('Button Clicked!');
	}

	loginClickHandler = () => {
		const {isloggedIn} = this.state;
		if (!isloggedIn) {
			this.setState ({isloggedIn: true});
		} else {
			this.setState ({isloggedIn: false});
		}
	}

	employeeNameHandler = ({target: {value:id}}, e) => {
		this.setState({id});
	}

	/*fieldValueHandler = (e) => {
		this.setState({value: e.target.value});
		console.log('Value: ' + e.target.value);
	}*/

	employeeInfoSubmitHandler = (event) => {
		event.preventDefault();
		const inputs = event.target.getElementByTagName('input');
		this.setState({
			firstName: inputs.firstName.value,
			lastName: inputs.lastName.value,
			age: inputs.age.value,
			department: inputs.department.value,
			company: inputs.company.value,
		});
		//console.log('Form value: ' + e.state.value);
	}

	render() {
		const {isloggedIn} = this.state;
		const {age = '', department = '', company = ''} = personInfo[this.state.id] || {};
		return(
			<div>
				<section className="home-main-content">					
					<div className="basic-information">
						<h2>Welcome to React learning tutorials.</h2>
						<a href="#" onClick={linkClickhandler}>Click the link.</a><br /><br />
						<button onClick={this.buttonClickHandler}>Click the button</button><br /><br />
						<button onClick={this.loginClickHandler}>{isloggedIn ? 'Click for Log out' : 'Click for Login'}</button>
					</div>
					<h3 className="re-employee-information">Employee Information</h3>
					<div className="employee-information">
						<div className="form-row">
							<label>Name: </label>
							<select onChange={this.employeeNameHandler}>
								<option>Please select a name</option>
								{personInfo.map(({fname, lname}, index) =>
									<option value={index} data-index={index}>{fname ? fname : ''} {lname ? lname : ''}</option>
								)}
							</select>
						</div>
						<div className="form-row">
							<label>Age: </label><span className="re-title-value">{age}</span>
						</div>
						<div className="form-row">
							<label>Department: </label><span className="re-title-value">{department}</span>							
						</div>
						<div className="form-row">
							<label>Company: </label><span className="re-title-value">{company}</span>							
						</div>
					</div>
					<div className="employee-information-form">
						<form onSubmit={this.employeeInfoSubmitHandler}>
							<div className="form-row">
								<label>First Name: </label><input type="text" placeholder="First Name" name="firstName" />
							</div>
							<div className="form-row">
								<label>Last Name: </label><input type="text" placeholder="Last Name" name="lastName" />
							</div>
							<div className="form-row">
								<label>Age: </label><input type="text" placeholder="Age" name="age"  />
							</div>
							<div className="form-row">
								<label>Department: </label><input type="text" placeholder="Department" name="department" />
							</div>
							<div className="form-row">
								<label>Company: </label><input type="text" placeholder="Company" name="company" />
							</div>
							<div className="form-row">
								<input type="submit" value="Submit" />
							</div>
						</form>
					</div>
				</section>
			</div>
		);
	}
}

export default HomeContent;