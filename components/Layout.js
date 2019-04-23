import Header from "./Header"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ( props ) => (
	<div>
		<Header />
		{ props.children }
	</div>
)

export default Layout