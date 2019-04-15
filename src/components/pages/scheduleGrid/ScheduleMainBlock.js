import React, { Component } from "react";
import { StickyContainer, Sticky } from 'react-sticky';
import ScheduleMain from "../../common/styled/grid/ScheduleMain";
import ScheduleBodyRow from '../../common/styled/grid/ScheduleBodyRow.js';
import ScrollWrapper from '../../common/styled/grid/ScrollWrapper';
import ScheduleHeaderCell from '../../common/styled/grid/ScheduleHeaderCell.js';
import ScheduleHeaderMain from '../../common/styled/grid/ScheduleHeaderMain.js'
import ScheduleHeaderCellFirstNameSpeaker from "../../common/styled/elements_grid_day_admin/ScheduleHeaderCellFirstNameSpeaker.js";
import EventModal from '../EventModal.js';
import ScheduleCellBlock from './ScheduleCellBlock.js';

class ScheduleMainBlock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalShow: false,
		};
	}

	modalShow = (lesson, speaker) => {
		const eventHelper = {
			organization_id: speaker.organizationID,
			schedule_id: this.props.scheduleId,
			date: this.props.day,
			duration: lesson,
			speaker_id: speaker.speakerID,
		};
		this.setState({ modalShow: true });
		this.props.dispatch({
			type: 'ADD_EVENT_HELPER',
			payload: eventHelper,
		});
	};

	modalClose = () => this.setState({ modalShow: false });

	render() {
		const { modalShow } = this.state;
        const { speakerById , lessonById,
			day, scheduleId, events} = this.props;
        return (
	        <>
		        {
			        (speakerById.length && lessonById.length)
				        ? <ScrollWrapper>
					        <StickyContainer>
						        <ScheduleMain>
							        <Sticky>
								        {({style}) => (
									        <ScheduleHeaderMain style={style}>
										        {speakerById.map((speaker, key) => {
											        return (
												        <ScheduleHeaderCell key={key}>
													        <ScheduleHeaderCellFirstNameSpeaker key={key}>
														        {speaker.speaker_name}
													        </ScheduleHeaderCellFirstNameSpeaker>
												        </ScheduleHeaderCell>
											        )
										        })}
									        </ScheduleHeaderMain>
								        )}
							        </Sticky>
							        {lessonById.map((lesson, key) => {
								        return (
									        <ScheduleBodyRow key={key}>
										        {speakerById.map((speaker, key) => {
											        return (
												       <ScheduleCellBlock
														   modalShow={this.modalShow}
														   lesson={lesson}
														   speaker={speaker}
														   key={key}
														   keyComponent={key}
														   day={day}
														   scheduleId={scheduleId}
														   events={events}
													   />
											        )
										        })}
									        </ScheduleBodyRow>
								        )
							        })}
							        <EventModal
								        show={modalShow}
								        onHide={this.modalClose}
							        />
						        </ScheduleMain>
					        </StickyContainer>
				        </ScrollWrapper>
				        : null
		        }
	        </>
		)
	}
}

export default ScheduleMainBlock;
