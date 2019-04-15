import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import ButtonModal from '../common/styled/buttons/ButtonModal';

class ErrorModal extends Component {
    render() {
        const { validators } = this.props;
        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5>
                            {validators.serverErrors ? 'Перевірте правильність наступних даних і здійсніть їх повторне надсилання:' :
                            'Будь-ласка, заповніть зазначені поля:'
                            }

                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        validators ? (
                            <ul>
                                {Object.keys(validators).map(key => {
                                    if(validators[key].isValid === false) {
                                        return (
                                            <li key={key}>
                                                {validators[key].label}
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        ) : null
                    }
                </Modal.Body>
                <Modal.Footer>
                    <ButtonModal onClick={this.props.onHide}>Закрити</ButtonModal>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ErrorModal;
