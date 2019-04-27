import Layout from "../components/Layout"
//import 'bootstrap/dist/css/bootstrap.css'

import '../static/css/Index.css'
const img = require("../static/img/foodhelp.jpg")

const Index = () => (
	<Layout>
		<section className="row mb-5 ml-5 intro">
			<div className="col-6">
				<article className="foodie">
					<h1> Welcome to FoodieSaver </h1>
					<p> We help you reduce food waste by connection
						you to those in need of food your no longer need 
						We help you reduce food waste by connection
						you to those in need of food your no longer need 
					</p>

				</article>
			</div>
			<div className="col">
				<img src="/static/img/help.jpg" className="image" /> 
			</div>

		</section>

		<section className="row mb-5 wat-we-do">
			<div className="col-4">
				<p> We help you reduce food waste by connection
						you to those in need of food your no longer need 
						We help you reduce food waste by connection
						you to those in need of food your no longer need 
				</p>
			</div>
			<div className="col-4">
				<p> We help you reduce food waste by connection
						you to those in need of food your no longer need 
						We help you reduce food waste by connection
						you to those in need of food your no longer need 
				</p>
			</div>
			<div className="col-4">
				<p> We help you reduce food waste by connection
						you to those in need of food your no longer need 
						We help you reduce food waste by connection
						you to those in need of food your no longer need 
				</p>
			</div>


		</section>

			<style jsx>{`

			`}</style>

	</Layout>
)


export default Index