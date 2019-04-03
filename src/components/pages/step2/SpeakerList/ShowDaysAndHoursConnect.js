import { connect } from 'react-redux';
import ShowDaysAndHours from './ShowDaysAndHours.js';
import { selectSpeakerDaysById } from '../../../../selectors/dayAndHoursSelector.js';

const mapStateToProps = (state, { speakerKey }) => ({
    days_and_hours: selectSpeakerDaysById(state, speakerKey),
});

export default connect(mapStateToProps)(ShowDaysAndHours);
