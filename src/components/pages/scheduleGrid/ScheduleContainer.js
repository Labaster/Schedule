import React, { Component } from "react";

import ScheduleWrapper from '../../common/styled/grid/ScheduleWrapper';
import ScheduleBodyBlock from './ScheduleBodyBlock.js';


class ScheduleContainer extends Component {
	render() {
		return (
			<ScheduleWrapper>
				<ScheduleBodyBlock />
			</ScheduleWrapper>
		)
	}
}

export default ScheduleContainer
