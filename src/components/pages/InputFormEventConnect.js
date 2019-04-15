import React, { Component } from "react";
import { connect } from 'react-redux';
import InputFormEvent from './InputFormEvent';
import { selectSubjectNameAndHours } from '../../selectors/subjectEventSelector';
import { selectRoomNameEvent } from '../../selectors/roomEventSelector';
import { selectDescriptionEvent } from '../../selectors/descriptionEventCelector';
import { selectEventHelper } from '../../selectors/eventHelperSelector';

class InputFormEventConnect extends Component {

    dispatchEventsToStore = (eventObj) => {
        this.props.dispatch({
            type: 'ADD_EVENT',
            payload: eventObj,
        });
    };

    render() {
        return (
            <InputFormEvent
                dispatchEventsToStore={this.dispatchEventsToStore}
                onHide={this.props.onHide}
                subjects={this.props.subjects}
                rooms={this.props.rooms}
                description={this.props.description}
                eventHelper={this.props.eventHelper}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    subjects: selectSubjectNameAndHours(state),
    rooms: selectRoomNameEvent(state),
    description: selectDescriptionEvent(state),
    eventHelper: selectEventHelper(state),

});

export default connect(mapStateToProps)(InputFormEventConnect);
