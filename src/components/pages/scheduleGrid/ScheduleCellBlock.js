import React, { Component } from "react";
import ScheduleCell from '../../common/styled/grid/ScheduleCell.js';
import ScheduleCellContent from './ScheduleCellContentBlock'
const moment = require('moment');

class ScheduleCellBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeColor: false,
        };
    }

    changeCellBackground = (val) => {
        this.setState({changeColor: val});
    };

    render() {
        const { modalShow, lesson, speaker, keyComponent,
            day, scheduleId, events } = this.props;
        return (
            <ScheduleCell
                changeColor={this.state.changeColor}
                key={keyComponent}
                onClick={(event) => {
                    event.preventDefault();
                    modalShow(lesson, speaker);
                }}
            >
                {
                    events.map( (event, key) => {
                        if( moment(event.date).format('DD:MM:YY') === moment(day).format('DD:MM:YY') &&
                            event.duration === lesson &&
                            event.organizationID === speaker.organizationID &&
                            event.scheduleID === scheduleId &&
                            event.speakerID === speaker.speakerID
                        ) {
                            return <ScheduleCellContent
                                        key={key}
                                        keyComponent={key}
                                        event={event}
                                        changeCellBackground={this.changeCellBackground}
                                    />
                        }
                    } )
                }
            </ScheduleCell>
        )
    }
}

export default ScheduleCellBlock;
