import Header from "./Header"
import Footer from "./Footer"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "../static/css/Layout.css"

const Layout = ( props ) => (
	<div className="layout">
		<Header />
		<main className="container-fluid">
			{ props.children }
		</main>
		<Footer />

		<style jsx>{`
			.layout {
				height: 100%;
			}
		`}</style>
	</div>
)

export default Layout

