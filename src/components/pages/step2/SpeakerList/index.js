import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import Speaker from './SpeakerConnect.js'
import { selectSpeakersKeys } from '../../../../selectors/speakerSelector.js';

const SpeakerListWrap = styled.ul`
    padding: 0;
`;

const SpeakerItemWrap = styled.li`
     list-style: none;
`;

class SpeakerList extends Component {

    removeSpeaker = (speakerKey) => {
        this.props.dispatch({
            type: 'DELETE_SPEAKER',
            payload: speakerKey,
        })
    };

    render() {
        const { speakersKeys } = this.props;
        return (
            <SpeakerListWrap>
                {
                  speakersKeys.map((speakerKey) => (
                    <SpeakerItemWrap key = {speakerKey}>
                      <Speaker
                        blockPage={this.props.blockPage}
                        speakerKey={speakerKey}
                        removeSpeaker={this.removeSpeaker}
                      />
                    </SpeakerItemWrap>
                  ))
                }
            </SpeakerListWrap>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        speakersKeys: selectSpeakersKeys(state),
    }
};

export default connect(mapStateToProps)(SpeakerList);
