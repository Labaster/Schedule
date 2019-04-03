import React, { Component } from "react";
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import SelectWrapper from '../../common/styled/wrappers/SelectWrapper';
import ButtonGreenPlus from '../../common/styled/buttons/ButtonGreenPlus';
import SelectStyled from "../../common/styled/forms/select/SelectStyled";
import InputStyled from '../../common/styled/forms/InputStyled';
import ButtonRedMinus from '../../common/styled/buttons/ButtonRedMinus.js';
import ErrorModal from '../ErrorModal.js';

const hoursPerWeek= [
        {value: '', name: '0'},
        {value: '1', name: '1'},
        {value: '2', name: '2'},
        {value: '3', name: '3'},
        {value: '4', name: '4'},
        {value: '5', name: '5'},
        {value: '6', name: '6'},
        {value: '7', name: '7'},
        {value: '8', name: '8'}];

class SubjectsNamesAndHoursBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            subject_name: '',
            subject_hours: '',
            formComponentsLabels: {
                subject_name: {isValid: true, label: 'введіть назву предмету'},
                subject_hours: {isValid: true, label: 'кількість годин на тиждень'},
            },
        }
    }

    handleSetSubjectNameLocal = (event) => {
        this.setState({subject_name: event.target.value});
    };

    handleSetSubjectHoursLocal = (event) => {
        this.setState({subject_hours: event.target.value});
    };

    handleDeleteSubject = (index) => {
        this.props.removeSubject(index);
    };

    clearFields = ( subject_name,  subject_hours) => {
        this.setState({ subject_name: subject_name, subject_hours: subject_hours});
    };

    modalShow = () => this.setState({ modalShow: true });

    modalClose = () => this.setState({ modalShow: false });

    handleValidation = (event) => {
        event.preventDefault();
        const formComponentsLabels = {...this.state.formComponentsLabels};

        !this.state.subject_name ?
            formComponentsLabels.subject_name.isValid = false :
            formComponentsLabels.subject_name.isValid = true;
        !this.state.subject_hours ?
            formComponentsLabels.subject_hours.isValid = false :
            formComponentsLabels.subject_hours.isValid = true;

        this.setState({formComponentsLabels: formComponentsLabels});
        for(let key in formComponentsLabels) {
            if (formComponentsLabels[key].isValid === false) {
                this.modalShow();
                return;
            }
        }
        const subject = {
            subject_name: this.state.subject_name,
            subject_hours: this.state.subject_hours,
        };
        this.props.retrieveSubjectData(subject);
        this.clearFields('', '');
    };

    render() {
        const { subjects } = this.props;
        return (
            <React.Fragment>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 mb-3">
                    <LabelStyledBold>
                        Введіть назви предметів:
                    </LabelStyledBold>
                    <div className="d-flex justify-content-start">
                        <div className="w-100">
                            <InputStyled
                                id="event_name"
                                type="text"
                                name="event_name"
                                value={this.state.subject_name}
                                onChange={this.handleSetSubjectNameLocal}
                                disabled={this.props.blockPage}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex-column mt-3 mb-3">
                    <LabelStyledBold>
                        Кількість годин на тиждень:
                    </LabelStyledBold>
                    <div className="row">
                    <SelectWrapper className="w-25">
                        <SelectStyled
                            value={this.state.subject_hours}
                            onChange={this.handleSetSubjectHoursLocal}
                            disabled={this.props.blockPage}
                        >
                            {hoursPerWeek.map((hoursPerWeek, index) => {
                                return ( <option key={index} value={hoursPerWeek.value}>{hoursPerWeek.name}</option>)
                            })}
                        </SelectStyled>
                    </SelectWrapper>
                    <React.Fragment>
                        <div className="">
                            <ButtonGreenPlus
                                onClick={this.handleValidation}
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
                {
                    (subjects.length === 0) ? null : (
                        <ul>
                            {subjects.map( (subject, index) => {
                                return (
                                    <li key={index}>
                                        <span>Предмет: {subject.subject_name} / </span>
                                        <span>Кількість годин: {subject.subject_hours}</span>
                                        <ButtonRedMinus
                                            key={index}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                this.handleDeleteSubject({index});
                                            }}
                                            disabled={this.props.blockPage}
                                        />
                                    </li>)
                            })}
                        </ul>
                    )
                }
            </React.Fragment>
        )
    }
}

export default SubjectsNamesAndHoursBlock;
