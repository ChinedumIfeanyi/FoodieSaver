import Link from 'next/link'
import "../static/css/Header.css"

const Header = () => (
	<header className="container-fluid p-4 mb-5">
		<div className="row">
			<figure className='col mt-2'>
				<img src="" alt="logo" />
				<figcaption> FoodieSaver </figcaption>
			</figure>
			<div className="col-6 mt-2 ">
				<Link href="/">
					<a className="link"> Home </a>
				</Link>
				<Link href="/about">
					<a className="link"> About </a>
				</Link>
				<Link href="/contact">
					<a className="link"> Contact </a>
				</Link>
			</div>

			<aside className="col mt-2">
				<Link href="/register">
					<a> Register </a>
				</Link>
				<Link href="/login" >
					<a> Login </a>
				</Link>
			</aside>
				
		</div>

		<style jsx> {`
			a {
				color: #fff;
				text-decoration: none;
				margin-right: 10px;
			}

			a:hover {
				text-decoration: none;
				font-size: bold;
				padding: 5px;
				border-radius: 6px;
				background-color: #333;
			}

			.link {
				color: #fff;
				text-decoration: none;
				margin-right: 10%;

			}

	
		`}</style>
	</header>
)


export default Header