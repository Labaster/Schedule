import React, { Component } from 'react';
import DayAndHoursBlock from './DayAndHoursBlock.js';
import ShowDaysAndHours from './ShowDaysAndHoursConnect.js';
import ButtonRedMinus from '../../../common/styled/buttons/ButtonRedMinus.js';

class Speaker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openSpeaker: false,
            modalShow: false,
        }
    }

    handleClick = () => {
        this.setState({openSpeaker: !this.state.openSpeaker});
    };

    handleDeleteSpeaker = (speakerKey) => {
        this.props.removeSpeaker(speakerKey);
    };

    render() {
        const { speaker } = this.props;
        const { openSpeaker } = this.state;
        const { speakerKey } = this.props;
        const body = openSpeaker
            &&
            <section>
                <ShowDaysAndHours
                    blockPage={this.props.blockPage}
                    speakerKey={speakerKey}
                />
                <DayAndHoursBlock
                    blockPage={this.props.blockPage}
                    speakerKey={speakerKey}
                />
            </section>;
        return (
            <div className="card mx-auto">
                <div className="card-header">
                    <h5>
                        {speaker}
                        <ButtonRedMinus
                            key={this.props.index}
                            onClick={(event) => {
                                event.preventDefault();
                                this.handleDeleteSpeaker(speakerKey);
                            }}
                            disabled={this.props.blockPage}
                        />
                        <button
                            onClick={ (event) => {
                                     event.preventDefault();
                                    this.handleClick();
                                 }}
                            className="btn btn-primary btn-sm float-right"
                            disabled={this.props.blockPage}
                        >
                            {openSpeaker ? '⋀' : '⋁'}
                        </button>
                    </h5>
                </div>
                    {body}
            </div>
        )
    }
}

export default Speaker;
