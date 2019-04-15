import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import LabelStyledBold from '../common/styled/forms/LabelStyledBold';
import SelectWrapper from '../common/styled/wrappers/SelectWrapper';
import SelectStyled from '../common/styled/forms/select/SelectStyled.js';
import TextAreaStyled from '../common/styled/forms/TextAreaStyled.js';
import { createEvent, getEvents } from '../../helpers/fetchHelper.js';
import ButtonModal from '../common/styled/buttons/ButtonModal';

class InputFormEvent extends Component {
    constructor(props) {
        super(props);
        const { rooms, subjects } = this.props;

        this.state = {
            subject_id: subjects['0']['subjectID'],
            room_id: rooms['0']['roomID'],
            desc: '',
        };
    }

    handleSetSubject = (event) => {this.setState({subject_id: event.target.value});};

    handleSetRoom = (event) => {this.setState({room_id: event.target.value});};

    handleSetDescription = (event) => {this.setState({desc: event.target.value});};

    setDefaults = () => this.setState({ subject_id: '', room_id: '', desc: '' });



    handleSubmit = () => {
        try{
            const { eventHelper, dispatchEventsToStore } = this.props;
            const eventInfo = {...this.state};
            // const response = await createEvent({...eventHelper, ...eventInfo});
            // await console.log(response);
            createEvent({...eventHelper, ...eventInfo}).then( response => {
                if(response.status === "error") { console.log(response); return; }
                console.log(response);
                this.setDefaults();
            }).then( () => {
                getEvents().then( events => {
                    if(!events.data.event) { console.log(events.data); return;}
                    dispatchEventsToStore(events.data.event);
                });
            })
        }catch (err) {
            console.error(err);
        }
    };

    render() {
        const { rooms, subjects } = this.props;
        return (
            <div>
                    <form>
                        <LabelStyledBold htmlFor="select_lesson_name">
                            Назва предмету:
                        </LabelStyledBold>
                        <SelectWrapper className="mb-4">
                            <SelectStyled
                                id="select_lesson_name"
                                value={this.state.subject}
                                onChange={this.handleSetSubject}
                            >
                                {subjects.map((subject, index) => {
                                    return (
                                        <option key={index} value={subject.subjectID}>{subject.subject_name}</option>)
                                })}
                            </SelectStyled>
                        </SelectWrapper>
                        <LabelStyledBold htmlFor="select_room_name">
                            Назва аудиторії:
                        </LabelStyledBold>
                        <SelectWrapper className="mb-4">
                            <SelectStyled
                                id="select_room_name"
                                value={this.state.room}
                                onChange={this.handleSetRoom}
                            >
                                {rooms.map((room, index) => {
                                    return ( <option key={index} value={room.roomID}>{room.room_name}</option>)
                                })}
                            </SelectStyled>
                        </SelectWrapper>
                        <LabelStyledBold htmlFor="textarea_description">
                            Примітки:
                        </LabelStyledBold>
                        <TextAreaStyled
                            id="textarea_description"
                            value={this.state.description}
                            onChange={this.handleSetDescription}
                        />
                        <Modal.Footer>
                            <ButtonModal
                                bsClass="custom-btn"
                                onClick={(event) => {
                                event.preventDefault();
                                this.props.onHide();
                                this.handleSubmit();
                            }}>
                                Зберегти
                            </ButtonModal>
                        </Modal.Footer>
                    </form>
            </div>
        );
    }
}

export default InputFormEvent;
