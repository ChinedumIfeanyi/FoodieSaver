import Layout from "../components/Layout"
import React, { Component } from "react"
import Link from "next/link"


class Register extends Component {

	state = {
		inputFields : {
			firstname: "",
			lastname: "",
			email: "",
			password: ""
		}

	}

	handleChange = (evt) => {
		const inputFields = this.state.inputFields
		inputFields[evt.target.name] = evt.target.value

		this.setState({
			inputFields
		})
	}

	submitForm = (evt) => {
		evt.preventDefault()

		console.log(this.state.inputFields)
	}


	render() {
		const {
			firstname,
			lastname,
			email,
			password
		} = this.state.inputFields

		return (
			<Layout>

				<div className="farmer mb-4">
					<Link href="/registerfarm">
						<a> Register as a Farmer </a>
					</Link>
				</div>

				<section>
					<form 
						method="POST" 
						onSubmit={ this.submitForm }
					>
						<div>
							<label htmlFor="firstname"> 
									Firstname 
							</label>
							<div className="mb-4">
								<input 
									onChange={ this.handleChange }
									value={ firstname }
									id="firstname"
									type="text" 
									name="firstname" 
								/> 
							</div>
						</div>	

						<div className="mb-4">
							<label htmlFor="lastname"> 
									Lastname 
							</label>
							<div>
								<input 
									onChange={ this.handleChange }
									value={ lastname }
									id="lastname"
									type="text" 
									name="lastname" 
								/> 
							</div>
						</div>	

						<div className="mb-4">
							<label htmlFor="email"> 
									Email 
							</label>
							<div>
								<input 
									onChange={ this.handleChange }
									value={ email }
									id="email"
									type="email" 
									name="email" 
								/> 
							</div>
						</div>

						<div className="mb-4">
							<label htmlFor="password"> 
									Password 
							</label>
							<div>
								<input 
									onChange={ this.handleChange }
									value={ password }
									id="password"
									type="password" 
									name="password" 
								/> 
							</div>
						</div>

						<div className="mb-4">
							<input type="submit" 
								value="REGISTER"
							/>
						</div>
					</form>

					<style>{`
						section {
							height: 70vh;
							width: 70%;
							text-align: center;
							margin: auto;
						}
						.farmer {
							text-align: center;
						}
					`}</style>
				</section>
			</Layout>
		)
	}
}
export default Register