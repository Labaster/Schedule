import React, { Component } from 'react';
import ButtonRedMinus from '../../../common/styled/buttons/ButtonRedMinus.js';

class ShowDaysAndHours extends Component {
    removeDay = (indexObj) => {
        this.props.dispatch({
            type: 'DELETE_DAY',
            payload: {...indexObj},
        })
    };

    render() {
        const { speakerKey } = this.props;
        const { days_and_hours } = this.props;
        return (
            (days_and_hours) ? (
            <React.Fragment>
                <ul>
                    {days_and_hours.map( (dayObj, index) => {
                        return (
                            <li key={index}>
                                <span>День: {dayObj.day} / </span>
                                <span>робочі години з: {dayObj.from}</span>
                                <span> по: {dayObj.to}</span>
                                <ButtonRedMinus
                                    key={index}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.removeDay({
                                            speakerIndex: parseInt(speakerKey),
                                            dayIndex: index,
                                        });

                                    }}
                                    disabled={this.props.blockPage}
                                />
                            </li>)
                    })}
                </ul>
            </React.Fragment>
        ) : null)
    }
}

export default ShowDaysAndHours;
