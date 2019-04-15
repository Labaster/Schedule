import React, { Component } from "react";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import uaLocale from '../../../helpers/uaLocale.js';

class AsideSectionCalendar extends Component {
    render() {
        const { selectedDate, elementWidth } = this.props;
        return (
            <Calendar
                date={selectedDate}
                onChange={this.props.handleChange}
                locale={uaLocale}
                color={"#46e491"}
                direction={"horizontal"}
                scroll={{
                    calendarWidth: parseInt(elementWidth),
                    enabled: true,
                }}
            />
        )
    }
}

export default AsideSectionCalendar;
