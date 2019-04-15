import React, { Component } from "react";
import ScheduleBody from "../../common/styled/grid/ScheduleBody.js";
import ScheduleMainBlock from './ScheduleMainBlockConnect.js'
import ScheduleAsideBlock from './ScheduleAsideBlockConnect.js';

class ScheduleBodyBlock extends Component {
	render() {
		return (
			<ScheduleBody>
				<ScheduleAsideBlock/>
				<ScheduleMainBlock/>
			</ScheduleBody>
		)
	}
}

export default ScheduleBodyBlock;
