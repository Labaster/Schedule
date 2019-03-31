import React, { Component } from 'react'
import { connect } from 'react-redux';
import Speaker from './Speaker.js'
import './speakerList.css'
import { selectSpeakerName, selectSpeakers } from '../../../../selectors/speakerSelector.js';

class SpeakerList extends Component {

    removeSpeaker = (speakerKey) => {
        this.props.dispatch({
            type: 'DELETE_SPEAKER',
            payload: speakerKey,
        })
    };

    render() {
        // console.log(this.props.store);
        const speakerManager = Object.keys(selectSpeakers(this.props.store)).map((speakerKey) =>
            <li key = {speakerKey} className="article-list__li">
                <Speaker
                    blockPage={this.props.blockPage}
                    key={speakerKey}
                    speakerKey={speakerKey}
                    speaker = {selectSpeakerName(this.props.store, speakerKey)}
                    removeSpeaker={this.removeSpeaker}
                />
            </li>
        );
        return (
            <ul style={{padding: "0"}}>
                {speakerManager}
            </ul>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        store: state,
    }
};

export default connect(mapStateToProps)(SpeakerList);
