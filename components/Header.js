import Link from 'next/link'



const Header = () => (
	<div>
		<div>
			<Link href="/" >
				<a> Home </a>
			</Link>
			<Link href="/register" >
				<a> Register </a>
			</Link>
			<Link href="/login" >
				<a> Login </a>
			</Link>
			
		</div>
	</div>
)


export default Header