import React, { Component } from 'react'
import { connect } from 'react-redux';
import SpanFromTo from "../../../common/styled/wrappers/SpanFromToWapper";
import InputStyled from '../../../common/styled/forms/InputStyled';
import LabelStyledBold from '../../../common/styled/forms/LabelStyledBold';
import ButtonGreenPlus from '../../../common/styled/buttons/ButtonGreenPlus';
import SelectDayWrapper from '../../../common/styled/wrappers/SelectWrapper';
import SelectDay from "../../../common/styled/forms/select/SelectStyled";
import ErrorModal from '../../ErrorModal.js';

const days = [
    {value: '', name: 'День'},
    {value: 'Monday', name: 'Пн'},
    {value: 'Tuesday', name: 'Вт'},
    {value: 'Wednesday', name: 'Ср'},
    {value: 'Thursday', name: 'Чт'},
    {value: 'Friday', name: 'Пт'},
    {value: 'Saturday', name: 'Сб'},
    {value: 'Sunday', name: 'Нд'},
];

class DayAndHoursBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            day: '',
            from: '',
            to: '',
            formComponentsLabels: {
                day: {
                    isValid: true,
                    label: 'виберіть день тижня'
                },
                working_hours_from: {
                    isValid: true,
                    label: 'години роботи викладача з (формату hh:mm)'
                },
                working_hours_to: {
                    isValid: true,
                    label: 'години роботи викладача по (формату hh:mm)'
                },
            },
        }
    }

    modalShow = () => this.setState({ modalShow: true });

    modalClose = () => this.setState({ modalShow: false });

    clearFields = () => {this.setState({ day: '', from: '', to: '' })};

    handleSetDayLocal = (event) => {this.setState({day: event.target.value})};

    handleSetStartWorkingHoursLocal = (event) => {this.setState({from: event.target.value})};

    handleSetEndWorkingHoursLocal = (event) => {this.setState({to: event.target.value});};

    retrieveDay = (dayObj) => {
        this.props.dispatch({
            type: 'ADD_DAY',
            payload: dayObj,
        });
    };

    handleValidation = (speakerKey) => {
        const formComponentsLabels = {...this.state.formComponentsLabels};
        const timeValidation = /^(?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

        !this.state.day ?
            formComponentsLabels.day.isValid = false :
            formComponentsLabels.day.isValid = true;
        !timeValidation.test(this.state.from) ?
            formComponentsLabels.working_hours_from.isValid = false :
            formComponentsLabels.working_hours_from.isValid = true;
        !timeValidation.test(this.state.to) ?
            formComponentsLabels.working_hours_to.isValid = false :
            formComponentsLabels.working_hours_to.isValid = true;

        for(let key in formComponentsLabels) {
            if (formComponentsLabels[key].isValid === false) {
                this.modalShow();
                return;
            }
        }
        this.retrieveDay({
            speakerKey: speakerKey,
            speakerDay: {
                day: this.state.day,
                from: this.state.from,
                to: this.state.to
            },
        });
        this.clearFields();
    };
    render() {
        const { speakerKey } = this.props;
        return (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-between mb-5">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <LabelStyledBold>
                        Виберіть день тижня:
                    </LabelStyledBold>
                    <SelectDayWrapper className="w-50">
                        <SelectDay
                            value={this.state.day}
                            onChange={this.handleSetDayLocal}
                            disabled={this.props.blockPage}
                        >
                            {days.map((day, index) => {
                                return ( <option key={index} value={day.value}>{day.name}</option>)
                            })}
                        </SelectDay>
                    </SelectDayWrapper>
                </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <LabelStyledBold>
                        Години роботи:
                    </LabelStyledBold>
                    <div className="d-flex justify-content-around align-items-center mb-3">
                        <SpanFromTo>
                            <span>з</span>
                        </SpanFromTo>
                        <div className="w-25">
                            <InputStyled
                                id="start_working_time"
                                type="text"
                                name="start_working_time"
                                placeholder="08:00"
                                value={this.state.from}
                                onChange={this.handleSetStartWorkingHoursLocal}
                                disabled={this.props.blockPage}
                            />
                        </div>
                        <div className="">
                            <SpanFromTo>
                                <span>по</span>
                            </SpanFromTo>
                        </div>
                        <div className="w-25">
                            <InputStyled
                                id="end_working_time"
                                type="text"
                                name="end_working_time"
                                placeholder="14:00"
                                value={this.state.to}
                                onChange={this.handleSetEndWorkingHoursLocal}
                                disabled={this.props.blockPage}
                            />
                        </div>
                        <React.Fragment>
                            <div className="">
                                <ButtonGreenPlus
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.handleValidation(speakerKey);
                                    }}
                                    disabled={this.props.blockPage}
                                />
                            </div>
                            <ErrorModal
                                validators={this.state.formComponentsLabels}
                                show={this.state.modalShow}
                                onHide={this.modalClose}
                            />
                        </React.Fragment>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        store: state,
    }
};

export default connect(mapStateToProps)(DayAndHoursBlock);
