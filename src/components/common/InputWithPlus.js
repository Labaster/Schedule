import React, { Component} from "react";
import { Link } from "react-router-dom";
import InputStyled from "./styled/forms/InputStyled";
import ButtonGreenPlus from "./styled/buttons/ButtonGreenPlus";

class InputWithPlus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			type: "",
			name: "",
			placeholder: ""
		};

	}
	render() {
		const property = this.state;

		return (
			<div>
				<InputStyled property={property} style={{ width: '80%' }}/>
				<Link to="#"><ButtonGreenPlus/></Link>
			</div>

		);
	}
}

export default InputWithPlus;
