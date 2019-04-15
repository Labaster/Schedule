import React, { Component } from "react";
import Header from './Header';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Header className='position-sticky' />
				{this.props.children}
			</div>
		)
	}
}

export default Layout;
