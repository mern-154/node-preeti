import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						My App
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="contact">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="counter">
									Counter
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Product
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" to="product">
											List
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="product/create">
											Add
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									TODOS
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" to="todo">
											List
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="todo/create">
											Create
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
