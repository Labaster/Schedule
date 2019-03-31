import React, { Component } from "react";
import { connect } from 'react-redux';
import { addDays } from 'date-fns';
import Title from '../../common/styled/text/Title.js';
import ScheduleTypeBlock from './ScheduleTypeBlock.js';
import OrganizationNameBlock from './OrganizationNameBlock.js';
import CalendarBlock from './CalendarBlock.js';
import LessonLengthBlock from './LessonLengthBlock.js'
import BreaksBlock from './BreaksBlock.js';
import ButtonProceed from './ButtonProceed.js';

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateRangePicker: {
                selection: {
                    startDate: this.props.schedule_duration_store.from ?
                        addDays(this.props.schedule_duration_store.from, -1) :
                        new Date(),
                    endDate: this.props.schedule_duration_store.to ?
                        addDays(this.props.schedule_duration_store.to, -1) :
                        addDays(new Date(), 0),
                    key: 'selection',
                },
            },
        };
        this.elementWidth = React.createRef();
    }

    handleRangeChange = (which, payload) => {
        this.setState({
            [which]: {
                ...this.state[which],
                ...payload,
            },
        });
        this.props.dispatch({
            type: 'ADD_SCHEDULE_DURATION',
            payload: {
                from: addDays(payload.selection.startDate, 1),
                to: addDays(payload.selection.endDate, 1),
            },
        });
    };

    handleSetScheduleType = (event) => {
        this.props.dispatch({
          type: 'ADD_SCHEDULE_TYPE',
          payload: event.target.value,
        });
    };

    handleSetOrganizationName = (event) => {
        this.props.dispatch({
          type: 'ADD_ORGANIZATION_NAME',
          payload: event.target.value,
        });
    };

    handleSetLessonLength = (event) => {
        this.props.dispatch({
            type: 'ADD_LESSON_DURATION',
            payload: event.target.value,
        });
    };

    handleSetBreak = (event) => {
        this.props.dispatch({
            type: 'ADD_INTERVAL_BREAK',
            payload: event.target.value,
        });
    };

    render() {
        return (
                    <div className="container">
                        <form className="row d-flex justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                                <Title className="text-center mb-5">
                                    1.Введіть данні:
                                </Title>
                                <div className="row">
                                    <ScheduleTypeBlock
                                        elementWidth={this.elementWidth}
                                        value={this.props.schedule_type_store}
                                        handleSetScheduleType={this.handleSetScheduleType}
                                    />
                                    <OrganizationNameBlock
                                        value={this.props.organization_name_store}
                                        handleSetOrganizationName={this.handleSetOrganizationName}
                                    />
                                    <CalendarBlock
                                        dateRangePicker={this.state.dateRangePicker.selection}
                                        elementWidth={this.elementWidth}
                                        handleRangeChange={this.handleRangeChange}
                                    />
                                    <LessonLengthBlock
                                        value={this.props.lesson_duration_store}
                                        handleSetLessonLength={this.handleSetLessonLength}
                                    />
                                    <BreaksBlock
                                        value={this.props.interval_break_store}
                                        handleSetBreak={this.handleSetBreak}
                                    />
                                    <ButtonProceed
                                        validation={this.props.store}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        schedule_type_store: state.schedule_type,
        organization_name_store: state.organization_name,
        schedule_duration_store: state.schedule_duration,
        lesson_duration_store: state.lesson_duration,
        interval_break_store: state.interval_break,
        store: state,
    }
};

export default connect(mapStateToProps)(Step1);
