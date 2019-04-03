import React, { Component } from "react";

import Main from '../../common/styled/grid/Main';
import ScheduleContainer from './ScheduleContainer.js';

class MainSection extends Component {


	render() {
		return (
			<>
				<Main>
					<ScheduleContainer />
				</Main>
			</>
		)
	}
}

export default MainSection;