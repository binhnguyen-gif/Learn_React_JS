import React, { Component } from "react";

class Content extends Component {
	constructor(props) {
		super(props);
		this.state= {index : 1};
	}
	render() {
		return (
			<div>
<p>{this.state.index}</p>
<button onClick = {() => {this.setState({index : this.state.index + 1})}}>Tang</button>
			</div>
		);
	}
}

export default Content;