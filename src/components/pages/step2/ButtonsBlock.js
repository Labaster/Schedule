import React, { Component } from "react";
import ButtonSuccess from '../../common/styled/buttons/ButtonSuccess';
import ButtonRegular from '../../common/styled/buttons/ButtonRegular';
import { Link } from "react-router-dom";
import ErrorModal from '../ErrorModal.js';
import { dataForServer } from '../../../selectors/dataForServerSelector.js';

class ButtonsBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            formComponentsLabels: {
                subject: {
                    isValid: true,
                    label: 'введіть назви предметів'
                },
                speaker: {
                    isValid: true,
                    label: 'введіть імена викладачів'
                },
                room: {
                    isValid: true,
                    label: 'введіть аудиторії'
                },
                days: {
                    isValid: true,
                    label: 'введіть дні та години викладача'
                },
            },
        }
    }

    modalShow = () => this.setState({ modalShow: true });

    modalClose = () => this.setState({ modalShow: false });

    waitUntilDataWillSend = () => {
        this.props.blockWindow();
        this.props.dispatchToServer(this.props.store);
        this.setState({ canProceed: false });
};

    handleValidation = (event) => {
        event.preventDefault();
        const validation = this.props.store;
        const formComponentsLabels = {...this.state.formComponentsLabels};

        !validation.subjects_names_and_hours.length ?
            formComponentsLabels.subject.isValid = false :
            formComponentsLabels.subject.isValid = true;
        !Object.keys(validation.speakers).length ?
            formComponentsLabels.speaker.isValid = false :
            formComponentsLabels.speaker.isValid = true;
        !validation.rooms.length ?
            formComponentsLabels.room.isValid = false :
            formComponentsLabels.room.isValid = true;
        !Object.keys(validation.days_and_hours).length ?
            formComponentsLabels.days.isValid = false :
            formComponentsLabels.days.isValid = true;

        this.setState({formComponentsLabels: formComponentsLabels});
        for(let key in formComponentsLabels) {
            if (formComponentsLabels[key].isValid === false) {
                this.modalShow();
                return;
            }
        }
        this.props.blockWindow(true);
        this.props.dispatchToServer(dataForServer(this.props.store));
    };

    render() {
            return (
            <React.Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                    <div className="d-flex justify-content-around">
                        <Link to="/schedule/creating/step_1">
                            <ButtonRegular
                                className="btn btn-lg"
                                type="submit"
                                disabled={this.props.blockPage}
                            >
                                Назад
                            </ButtonRegular>
                        </Link>
                        <ButtonSuccess
                            onClick={this.handleValidation}
                            className="btn btn-lg"
                            type="submit"
                            disabled={this.props.blockPage}
                        >
                            Далі
                        </ButtonSuccess>
                    </div>
                </div>
                <ErrorModal
                    validators={this.state.formComponentsLabels}
                    show={this.state.modalShow}
                    onHide={this.modalClose}
                />
            </React.Fragment>
        )
    }
}

export default ButtonsBlock;
