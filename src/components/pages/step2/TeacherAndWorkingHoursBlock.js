import React, { Component } from "react";
import InputStyled from '../../common/styled/forms/InputStyled';
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import ButtonGreenPlus from '../../common/styled/buttons/ButtonGreenPlus';
import ErrorModal from '../ErrorModal.js';
import SpeakerList from './SpeakerList';

class TeacherAndWorkingHoursBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            speaker_name: '',
            formComponentsLabels: {
                speaker_name: {
                    isValid: true,
                    label: 'введіть ім\'я викладача'
                },
            },
        }
    }

    handleSetSpeakerNameLocal = (event) => {
        this.setState({speaker_name: event.target.value});
    };

    clearFields = () => {
        this.setState({ speaker_name: ''});
    };

    modalShow = () => this.setState({ modalShow: true });

    modalClose = () => this.setState({ modalShow: false });

    handleValidation = (event) => {
        event.preventDefault();
        const formComponentsLabels = {...this.state.formComponentsLabels};

        !this.state.speaker_name ?
            formComponentsLabels.speaker_name.isValid = false :
            formComponentsLabels.speaker_name.isValid = true;

        this.setState({formComponentsLabels: formComponentsLabels});
        for(let key in formComponentsLabels) {
            if (formComponentsLabels[key].isValid === false) {
                this.modalShow();
                return;
            }
        }
        this.props.retrieveSpeakerName(this.state.speaker_name);
        this.clearFields();
    };

    render() {
        return (
            <React.Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                    <SpeakerList
                    blockPage={this.props.blockPage}
                    />
                    <LabelStyledBold htmlFor="speaker_name">
                        Введіть імена викладачів:
                    </LabelStyledBold>
                    <div className="d-flex justify-content-start">
                        <div className="w-100">
                            <InputStyled
                                id="speaker_name"
                                type="text"
                                name="speaker_name"
                                placeholder="ПІБ"
                                value={this.state.speaker_name}
                                onChange={this.handleSetSpeakerNameLocal}
                                disabled={this.props.blockPage}
                            />
                        </div>
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
            </React.Fragment>
        )
    }
}

export default TeacherAndWorkingHoursBlock;
