import React, { Component } from "react";
import { connect } from 'react-redux';
import Title from '../../common/styled/text/Title.js';
import InActiveWindowWrapper from '../../common/styled/InActiveWindowWrapper.js';
import SubjectsNamesAndHoursBlock from './SubjectsNamesAndHoursBlock.js'
import TeacherAndWorkingHoursBlock from './TeacherAndWorkingHoursBlock.js'
import ButtonsBlock from './ButtonsBlock.js'
import RoomBlock from './RoomBlock.js'
import { dispatchData } from '../../../helpers/fetchHelper';
import SpinnerBlock from './SpinnerBlock.js';
import ErrorModal from '../ErrorModal.js';
import validator from '../../../helpers/validation.js';
import { selectSubjectsNamesAndHours } from '../../../selectors/subjectsNamesAndHours.js';
import { selectRooms } from '../../../selectors/roomsSelector.js';

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            blockPage: false,
            errors: [],
            formComponentsLabels: {
                serverErrors: true,
                schedule_type: {isValid: true, label: 'тип розкладу'},
                organization_name: {isValid: true, label: 'назву організації'},
                schedule_duration: {isValid: true, label: 'термін дії розкладу(виберіть з календаря)'},
                lesson_duration: {isValid: true, label: 'тривалість одного заняття(вказувати в хв. наприклад 45)'},
                interval_break: {isValid: true, label: 'перерви між заняттями'},
                subjects: {isValid: true, label: 'назви предметів та їх кількість годин на тиждень'},
                from: {isValid: true, label: 'години роботи викладача з'},
                to: {isValid: true, label: 'години роботи викладача по'},
                rooms: {isValid: true, label: 'назви аудиторій'},
            },
        };
    }

    componentWillUnmount() {dispatchData();}

    modalShow = () => this.setState({ modalShow: true });

    modalClose = () => this.setState({ modalShow: false });

    dispatchToServer = (dataObj) => {
        dispatchData(dataObj).then(
            res => {
                if (res.status !== 200) {
                    this.setState({ errors: JSON.parse(res.statusText) });
                    this.blockWindow(false);
                    this.setState({ formComponentsLabels: {
                        ...validator({...this.state.formComponentsLabels}, this.state.errors)
                    }});
                    this.modalShow();
                } else {
                    this.clearsStore();
                    this.blockWindow(false);
                    const { history } = this.props;
                    history.push('/schedule/');
                }
            })
            .catch(error => {
            this.setState({ errors: error });
        });
    };

    clearsStore = () => {
        this.props.dispatch({
            type: 'CLEAR_STORAGE',
            payload: undefined,
        })
    };

    retrieveSubjectData = (subject) => {
        this.props.dispatch({
            type: 'ADD_SUBJECT',
            payload: {...subject},
        })
    };

    removeSubject = (indexObj) => {
        this.props.dispatch({
            type: 'DELETE_SUBJECT',
            payload: indexObj.index,
        })
    };

    retrieveSpeakerName = (speaker) => {
        this.props.dispatch({
            type: 'ADD_SPEAKER',
            payload: speaker,
        })
    };

    retrieveRoomData = (room) => {
        this.props.dispatch({
            type: 'ADD_ROOM',
            payload: room,
        })
    };

    removeRoom = (indexObj) => {
        this.props.dispatch({
            type: 'DELETE_ROOM',
            payload: indexObj.index,
        })
    };

    blockWindow = (bool) => {
        this.setState({blockPage: bool})
    };

    render() {
        return (
            <InActiveWindowWrapper
                show={this.state.blockPage}
            >
                <div className="container">
                    <form className="row d-flex justify-content-center mb-5">
                        <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12 mt-5 mb-5">
                            <Title className="text-center mt-5 mb-5">
                                2.Введіть данні:
                            </Title>
                            <div className="row">
                                <SubjectsNamesAndHoursBlock
                                    blockPage={this.state.blockPage}
                                    subjects={this.props.subjects_names_and_hours}
                                    retrieveSubjectData={this.retrieveSubjectData}
                                    removeSubject={this.removeSubject}
                                />
                            </div>
                                <div className="row">
                                <TeacherAndWorkingHoursBlock
                                    blockPage={this.state.blockPage}
                                    retrieveSpeakerName={this.retrieveSpeakerName}
                                />
                                </div>
                            <div className="row">
                                <RoomBlock
                                    blockPage={this.state.blockPage}
                                    rooms={this.props.rooms}
                                    retrieveRoomData={this.retrieveRoomData}
                                    removeRoom={this.removeRoom}
                                />
                                <ButtonsBlock
                                    blockWindow={this.blockWindow}
                                    blockPage={this.state.blockPage}
                                    store={this.props.store}
                                    dispatchToServer={this.dispatchToServer}
                                />
                                <SpinnerBlock
                                    show={this.state.blockPage}
                                />
                                <ErrorModal
                                    validators={this.state.formComponentsLabels}
                                    show={this.state.modalShow}
                                    onHide={this.modalClose}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </InActiveWindowWrapper>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {
        subjects_names_and_hours: selectSubjectsNamesAndHours(state),
        rooms: selectRooms(state),
        store: state,
    }
};

export default connect(mapStateToProps)(Step2);
