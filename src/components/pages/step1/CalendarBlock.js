import React, { Component } from "react";
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import { DateRange } from 'react-date-range';
import ButtonCalendar from '../../common/styled/buttons/ButtonCalendar';
import CalendarIcon from '../../common/styled/images/CalendarIcon';
import calendarImg from '../../../static/img/calendar_icon.png';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import uaLocale from '../../../helpers/uaLocale.js';

class CalendarBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show_calendar: false,
            calendar_Width: 200,
        }
    }

    showCalendar = (show_calendar) =>
    {
        show_calendar.preventDefault();
        this.setState({ show_calendar: !this.state.show_calendar });
    };

    updateDimensions() {
        if (window.innerWidth !== this.state.calendar_Width) {
            this.setState({calendar_Width: this.props.elementWidth.current.offsetWidth});
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
        const { show_calendar } = this.state;
        const { dateRangePicker } = this.props;
        return (
            <React.Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 mb-5">
                    <LabelStyledBold>
                        Термін дії розкладу:
                    </LabelStyledBold>
                    <div>
									<span onClick={this.showCalendar}>
										<ButtonCalendar >
											<CalendarIcon src={calendarImg} alt="calendar_icon" />
                                            {this.state.show_calendar ? "Сховати календар" : "Вибрати дати"}
										</ButtonCalendar>
									</span>
                        {
                            !show_calendar ? null :
                                < DateRange
                                    showDateDisplay={true}
                                    showSelectionPreview={true}
                                    showMonthAndYearPickers={false}
                                    showMonthArrow={true}
                                    moveRangeOnFirstSelection={false}
                                    rangeColors={["#46e491"]}
                                    direction={"horizontal"}
                                    minDate={new Date()}
                                    ranges={[dateRangePicker]}
                                    locale={uaLocale}
                                    onChange={this.props.handleRangeChange.bind(this, 'dateRangePicker')}
                                    months={2}
                                    scroll={{
                                        calendarWidth: parseInt(Math.trunc(this.state.calendar_Width/2)),
                                        enabled: true,
                                    }}
                                />
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CalendarBlock;
