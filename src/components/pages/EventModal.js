import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import styled from "styled-components";
import InputFormEvent from './InputFormEventConnect.js';

const TitleWrapper = styled.h5`
    align: center;
`;

class EventModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <TitleWrapper>
                            Стровення нового івенту
                        </TitleWrapper>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputFormEvent
                        onHide={this.props.onHide}
                    />
                </Modal.Body>
            </Modal>
        );
    }
}

export default EventModal;
