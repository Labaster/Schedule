import React, { Component } from "react";
import ButtonSuccess from "../../common/styled/buttons/ButtonSuccess";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import ErrorModal from '../ErrorModal.js';

const LinkProceed = ButtonSuccess.withComponent(Link);

class ButtonProceed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            canProceed: false,
            formComponentsLabels: {
                schedule_type: {
                    isValid: true,
                    label: 'тип розкладу'
                },
                organization_name: {
                    isValid: true,
                    label: 'назва навчального закладу'
                },
                schedule_duration: {
                    isValid: true,
                    label: 'термін дії розкладу'
                },
                lesson_duration: {
                    isValid: true,
                    label: 'тривалість одного заняття(наприклад 120)'
                },
                interval_break: {
                    isValid: true,
                    label: 'перерви між заннятями'
                },
            },
        }
    }

    handleValidation = () => {
        let canProceed = true;
        const { validation } = this.props;
        const formComponentsLabels = {...this.state.formComponentsLabels};
        const lessonDurationValidator = /^[0-9]{1,3}$/;

        !validation.interval_break ?
            formComponentsLabels.interval_break.isValid = false :
            formComponentsLabels.interval_break.isValid = true;
        !validation.schedule_type ?
            formComponentsLabels.schedule_type.isValid = false :
            formComponentsLabels.schedule_type.isValid = true;
        !validation.organization_name ?
            formComponentsLabels.organization_name.isValid = false :
            formComponentsLabels.organization_name.isValid = true;
        !lessonDurationValidator.test(validation.lesson_duration) ?
            formComponentsLabels.lesson_duration.isValid = false :
            formComponentsLabels.lesson_duration.isValid = true;
        !Object.keys( validation.schedule_duration) ?
            formComponentsLabels.schedule_duration.isValid = false :
            formComponentsLabels.schedule_duration.isValid = true;

        this.setState({formComponentsLabels: formComponentsLabels});
        for(let key in formComponentsLabels) {
            if (formComponentsLabels[key].isValid === false) { canProceed = false; break; }
        }
        this.setState({ canProceed: canProceed });
        if(this.state.canProceed === false) {
            this.modalShow();
        }
    };

    modalShow = () => this.setState({ modalShow: true });

    modalClose = () => this.setState({ modalShow: false });

    render() {
        const { canProceed } = this.state;
        if (!canProceed) return (
            <React.Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                    <div className="d-flex justify-content-around">
                        <LinkProceed
                            className="btn btn-lg"
                            to="#"
                            onClick={this.handleValidation}
                        >
                            Далі
                        </LinkProceed>
                    </div>
                </div>
                <ErrorModal
                    validators={this.state.formComponentsLabels}
                    show={this.state.modalShow}
                    onHide={this.modalClose}
                />
            </React.Fragment>
        );
        return (
            <Redirect to="/schedule/creating/step_2"/>
        )
    }
}

export default ButtonProceed;
