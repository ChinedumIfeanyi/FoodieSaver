import React, { Component } from "react"
import Layout from "../components/Layout"
import Link  from "next/link"

class Dashboard extends Component {

	render() {
		return (
		
				<Layout>
					<nav>
						<Link href="/profile">
							<a> Profile </a>
						</Link>						
						<Link href="/market">
							<a> Market Place </a>
						</Link>
					</nav>
					<main>

					</main>
				</Layout>
			
		);
	}
}


export default Dashboard