import React, { Component } from "react";
import ButtonGreenPlus from '../../common/styled/buttons/ButtonGreenPlus';
import InputStyled from '../../common/styled/forms/InputStyled';
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import ButtonRedMinus from '../../common/styled/buttons/ButtonRedMinus.js';
import ErrorModal from '../ErrorModal.js';

class RoomBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            room: '',
            formComponentsLabels: {
                room: {
                    isValid: true,
                    label: 'введіть аудиторію'
                },
            }
        }
    }

    handleSetRoomLocal = (event) => {
        this.setState({room: event.target.value});
    };

    handleDeleteRoom = (index) => {
        this.props.removeRoom(index);
    };

    modalShow = () => this.setState({ modalShow: true });

    modalClose = () => this.setState({ modalShow: false });

    clearFields = ( room ) => {
        this.setState({ room: room });
    };


    handleValidation = (event) => {
        event.preventDefault();
        const formComponentsLabels = {...this.state.formComponentsLabels};
        !this.state.room ?
            formComponentsLabels.room.isValid = false :
            formComponentsLabels.room.isValid = true;

        this.setState({formComponentsLabels: formComponentsLabels});
        for(let key in formComponentsLabels) {
            if (formComponentsLabels[key].isValid === false) {
                this.modalShow();
                return;
            }
        }
        this.props.retrieveRoomData(this.state.room);
        this.clearFields('');
    };

    render() {
        const { rooms } = this.props;
        return (
            <React.Fragment>
                {
                    (rooms.length === 0) ? null : (
                        <ul>
                            {rooms.map( (room, index) => {
                                return (
                                    <li key={index}>
                                        <span>Кімната: {room}</span>
                                        <ButtonRedMinus
                                            key={index}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                this.handleDeleteRoom({index});
                                            }}
                                            disabled={this.props.blockPage}
                                        />
                                    </li>)
                            })}
                        </ul>
                    )
                }
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">

                    <LabelStyledBold htmlFor="room_name">
                        Введіть аудиторії:
                    </LabelStyledBold>
                    <div className="d-flex justify-content-start">
                        <div className="w-100">
                            <InputStyled
                                id="room_name"
                                type="text"
                                name="room_name"
                                value={this.state.room}
                                onChange={this.handleSetRoomLocal}
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

export default RoomBlock;
