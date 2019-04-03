import { connect } from 'react-redux';
import Speaker from './Speaker';
import { selectSpeakerName } from '../../../../selectors/speakerSelector.js';

const mapStateToProps = (state, { speakerKey }) => ({
  speaker: selectSpeakerName(state, speakerKey),
});

export default connect(mapStateToProps)(Speaker);
