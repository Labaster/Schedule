import React, { Component } from "react";
import { connect } from 'react-redux';
import Aside from '../../common/styled/grid/Aside.js';
import CalendarStyledWrapper from '../../common/styled/calendar/CalendarStyledWrapper.js';
import AsideSectionCalendar from './AsideSectionCalendar.js';
import { selectEventDay } from "../../../selectors/dayForEventSelector";

class AsideSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedDate: this.props.day ?
				this.props.day :
				new Date(),
			calendarWidth: 200,
		};
		this.elementWidth = React.createRef();
	}

	handleChange = (event) => {
		this.props.dispatch({
			type: 'ADD_DAY_EVENT',
			payload: event,
		});
		this.setState({selectedDate: event})
	};

	updateDimensions() {
		if (this.elementWidth.current.offsetWidth !== this.state.calendarWidth) {
			this.setState({calendarWidth: this.elementWidth.current.offsetWidth});
		}
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}

	render() {
		return (
			<Aside>
				<CalendarStyledWrapper ref={this.elementWidth}>
					<AsideSectionCalendar
						selectedDate={this.state.selectedDate}
						elementWidth={this.state.calendarWidth}
						handleChange={this.handleChange}
				/>
				</CalendarStyledWrapper>
			</Aside>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		day: selectEventDay(state),
		store: state,
	}
};
export default connect(mapStateToProps)(AsideSection);
