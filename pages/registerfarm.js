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
						<div>
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

						<div>
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

						<div>
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

						<div>
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

						<div>
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

						<div>
							<label htmlFor="farmproduce"> 
									Farm Produce 
							</label>
							<div>
								<input 
									onChange={ this.handleChange }
									value={ farmproduce }
									id="farmproduce"
									type="text" 
									name="farmproduce" 
								/> 
							</div>
						</div>

						<div>
							<input type="submit" 
								value="REGISTER FARM"
							/>
						</div>
					</form>
				</section>
			</Layout>
		)
	}
}
export default RegisterFarm