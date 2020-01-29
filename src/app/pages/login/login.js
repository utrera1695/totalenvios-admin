import React, { Component } from 'react';
import UserService from '../../../services/user.service';
import Swal from 'sweetalert2';

import logo  from '../../../assets/img/logo.png'
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.login = this.login.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}
	async login() {
		UserService.Login(this.state.email, this.state.password)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				window.location.reload();
			})
			.catch((error) => {
				Swal.fire({
					type: 'error',
					title: 'Email o contraseña erronea',
					showConfirmButton: false,
					timer: 1500,
				});
				console.log(error.response);
			});
	}
	onInputChange(e) {
		var name = e.target.name;
		var value = e.target.value;
		this.setState({ [name]: value });
	}
	render() {
		return (
			<div className="auth-wrapper">
				<div className="auth-content">
					<div className="auth-bg">
						<span className="r"></span>
						<span className="r s"></span>
						<span className="r s"></span>
						<span className="r"></span>
					</div>
					<div className="card">
						<div className="card-body text-center">
							<div className="mb-4">
								<img src={logo} alt="logo" style={{width:'70%'}}/>
							</div>
							<h3 className="mb-4">Login</h3>
							<div className="input-group mb-3">
								<input
									type="email"
									name="email"
									value={this.state.email}
									onChange={this.onInputChange}
									className="form-control"
									placeholder="Correo Electrónico"
								/>
							</div>
							<div className="input-group mb-4">
								<input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.onInputChange}
									className="form-control"
									placeholder="Contraseña"
								/>
							</div>
							{/* <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked=""/>
                                        <label for="checkbox-fill-a1" className="cr"> Save Details</label>
                                </div>
                            </div> */}
							<button className="btn btn-primary shadow-2 mb-4" onClick={this.login}>
								Ingresar
							</button>
							{/*  <p className="mb-2 text-muted">Forgot password? <a href="auth-reset-password.html">Reset</a></p> */}
							{/* <p className="mb-0 text-muted">Don’t have an account? <a href="auth-signup.html">Signup</a></p> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
