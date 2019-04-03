import React, { Component } from "react";


import ScheduleWrapper from '../../common/styled/grid/ScheduleWrapper';
import ScheduleBody from '../../common/styled/grid/ScheduleBody';
import ScheduleHeaderBlock from './ScheduleHeaderBlock.js'


class ScheduleContainer extends Component {
	render() {
		return (
			<>
				{/* here should be the hamburger */}
				<ScheduleWrapper>
					<ScheduleHeaderBlock />
					<ScheduleBody>

					</ScheduleBody>
				</ScheduleWrapper>
			</>
		)
	}
}

export default ScheduleContainer