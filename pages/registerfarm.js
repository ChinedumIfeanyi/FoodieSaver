import Layout from "../components/Layout"
import React, { Component } from "react"


class RegisterFarm extends Component {

	state = {
		inputFields : {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			bizname: "",
			farmproduce: ""
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
			password,
			bizname,
			farmproduce
		} = this.state.inputFields

		return (
			<Layout>

				<section>
					<form 
						method="POST" 
						onSubmit={ this.submitForm }
					>
						<div className="mb-4">
							<label htmlFor="firstname"> 
									Firstname 
							</label>
							<div>
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
							<label htmlFor="bizname"> 
									Business Name 
							</label>
							<div>
								<input 
									onChange={ this.handleChange }
									value={ bizname }
									id="bizname"
									type="text" 
									name="bizname" 
								/> 
							</div>
						</div>						

						
						<div className="mb-4">
							<input type="submit" 
								value="REGISTER FARM"
							/>
						</div>
					</form>

					<style>{`
						section {
							height: 80vh;
							width: 70%;
							text-align: center;
							margin: auto;
						}
					`}</style>
				</section>
			</Layout>
		)
	}
}
export default RegisterFarm