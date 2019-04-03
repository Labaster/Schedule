import React, { Component } from "react";
import { connect } from 'react-redux';

import ContentContainer from '../../common/styled/grid/ContentContainer.js';
import MainSection from "./MainSection.js";
import AsideSection from "./AsideSection.js";

class Grid extends Component {

	render() {
		return (
			<ContentContainer>
				< AsideSection />
				< MainSection />
			</ContentContainer>
		)
	}
}

export default Grid;