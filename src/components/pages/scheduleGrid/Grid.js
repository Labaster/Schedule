import React, { Component } from "react";
import { connect } from 'react-redux';
import ContentContainer from '../../common/styled/grid/ContentContainer.js';
import MainSection from "./MainSection.js";
import AsideSection from "./AsideSection.js";
import { getInitData, getEvents } from '../../../helpers/fetchHelper.js';

class Grid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			errors: [],
		}
	}

	async componentDidMount(){
		try{
			this.setState({ isLoading: true });
			const initData = await getInitData();
			await this.dispatchInitDataToStore(initData.data);
			const events = await getEvents();
			if(!events.data.event) { await console.log(events.data);}
			else{await this.dispatchEventsToStore(events.data.event);}
			await this.setState({isLoading: false,})
		}
		catch(error) {
			this.setState({ errors: error });
		}
	}

	dispatchEventsToStore = (eventObj) => {
		this.props.dispatch({
			type: 'ADD_EVENT',
			payload: eventObj,
		});
	};

	dispatchInitDataToStore(data) {
		 this.props.dispatch({
			type: 'ADD_LESSON_AND_BREAK_EVENT',
			payload: data.lessonAndBreakDuration,
		});
		 this.props.dispatch({
			type: 'ADD_ORGANIZATION_EVENT',
			payload: data.organization,
		});
		 this.props.dispatch({
			type: 'ADD_ROOM_EVENT',
			payload: data.rooms,
		});
		 this.props.dispatch({
			type: 'ADD_SCHEDULE_EVENT',
			payload: data.schedule,
		});
		 this.props.dispatch({
			type: 'ADD_SPEAKER_EVENT',
			payload: data.speakers,
		});
		 this.props.dispatch({
			type: 'ADD_SUBJECT_EVENT',
			payload: data.subjects,
		});
	};

	render() {
		console.log(this.props.store);
		return (
				<ContentContainer>
					< AsideSection />
					< MainSection />
				</ContentContainer>
		)
	}
}
const mapStateToProps = (state, props) => {
	return {
		store: state,
	}
};

export default connect(mapStateToProps)(Grid);
