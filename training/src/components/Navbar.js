import React from "react";
import '../App.css';
const Navbar = function(props) {
	return (
		<nav className="navbar">
		<div className="container">
		<ul className="navbar_list">
		<li className="navbar_item"><a href="" className="navbar_link">{props.home}</a></li>
		<li className="navbar_item"><a href="" className="navbar_link">{props.plan}</a></li>
		<li className="navbar_item"><a href="" className="navbar_link">{props.about}</a></li>
		</ul>
		</div>
		</nav>
		);
	}

	export default Navbar;