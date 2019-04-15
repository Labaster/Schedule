import React, { Component } from "react";
import { connect } from 'react-redux';
import SortingPanelWrapper from '../../common/styled/wrappers/SortingPanelWrapper.js';
import SortingButton from '../../common/styled/buttons/SortingButton';
import ScheduleNameWrapper from '../../common/styled/wrappers/ScheduleNameWrapper.js';
import ArrowLeft from '../../common/styled/images/ArrowLeft.js';
import ArrowRight from '../../common/styled/images/ArrowRight.js';
import ScheduleNameText from '../../common/styled/text/ScheduleNameText.js';
import { selectScheduleById } from "../../../selectors/scheduleTypeSelector";

class SelectPanelBlock extends Component {
	render() {
		const { scheduleNameById } = this.props;
		return (
			<SortingPanelWrapper>
				<SortingButton success>День</SortingButton>
				<SortingButton>Тиждень</SortingButton>
				<SortingButton>Місяць</SortingButton>
				<ScheduleNameWrapper>
					<ArrowLeft/>
						<ScheduleNameText>
							{scheduleNameById ? scheduleNameById : "Назва розкладу"}
						</ScheduleNameText>
					<ArrowRight/>
				</ScheduleNameWrapper>
			</SortingPanelWrapper>
		)
	}
}
const mapStateToProps = (state, props) => {
	return {
		scheduleNameById: selectScheduleById(state, 1, "schedule_type"),
		store: state,
	}
};
export default connect(mapStateToProps)(SelectPanelBlock);
