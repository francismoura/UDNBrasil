import 'bootswatch/dist/flatly/bootstrap.css';

function Navbar(props) {

	return (

		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div class="container-fluid">
				<a className="navbar-brand" href="/">Universidades Brasileiras</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav me-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">Home
								<span className="visually-hidden">(current)</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	)

}

export default Navbar
