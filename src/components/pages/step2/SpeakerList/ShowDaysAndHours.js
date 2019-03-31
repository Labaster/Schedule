import React, { Component } from 'react';
import ButtonRedMinus from '../../../common/styled/buttons/ButtonRedMinus.js';
import { connect } from "react-redux";

class ShowDaysAndHours extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    removeDay = (indexObj) => {
        this.props.dispatch({
            type: 'DELETE_DAY',
            payload: {...indexObj},
        })
    };

    render() {
        const { speakerKey } = this.props;
        return (
            (this.props.days_and_hours_store[speakerKey]) ? (
            <React.Fragment>
                <ul>
                    {this.props.days_and_hours_store[speakerKey].map( (dayObj, index) => {
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

const mapStateToProps = (state, props) => {
    return {
        days_and_hours_store: state.days_and_hours,
        store: state,
    }
};

export default connect(mapStateToProps)(ShowDaysAndHours);
