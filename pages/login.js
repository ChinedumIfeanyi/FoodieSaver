import Layout from "../components/Layout"
import React, { Component } from "react"
import Link from "next/link"


class Login extends Component {

		state = {
			details:{
				email: "",
				password: ""
			}
		}

	
	submitForm = ( evt ) =>{
		evt.preventDefault()

		console.log(this.state.details)
	}

	handleChange = (evt) => {
		const details = this.state.details
		details[evt.target.name] = evt.target.value
		
		this.setState({
			details
		})
	}

	render() {
		const { email, password } = this.state.details
		return (
			<Layout>
				<section>

					<div className="auth0">
						<Link href="/facebook">
							<a> Continue With Facebook </a>
						</Link>
						<Link href="/google">
							<a> Continue With Google </a>
						</Link>
					</div>

					<form
						method="POST" 
						onSubmit={this.submitForm.bind(this)} >
						<div>
							<label htmlFor="email"> 
									Email 
							</label>
							<div>
								<input 
									onChange={this.handleChange.bind(this)}
									value={ email }
									id="email"
									type="email" 
									name="email" 
								/> 
							</div>
						</div>						

						<div>
							<label htmlFor="password"> 
									Password 
							</label>
							<div>
								<input 
									onChange={this.handleChange}
									value={ password }
									id="password"
									type="password" 
									name="password" 
								/> 
							</div>
						</div>

						<div>
							<input type="submit" 
								value="LOGIN"
							/>
						</div>
					</form>
				</section>
			</Layout>
		)
	}
}
export default Login