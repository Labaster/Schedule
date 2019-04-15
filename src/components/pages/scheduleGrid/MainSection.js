import React, { Component } from "react";

import Main from '../../common/styled/grid/Main';
import ScheduleContainer from './ScheduleContainer.js';
import SortingPanelBlock from './SelectPanelBlock.js';

class MainSection extends Component {
	render() {
		return (
			<Main>
				<SortingPanelBlock />
				<ScheduleContainer />
			</Main>
		)
	}
}

export default MainSection;
