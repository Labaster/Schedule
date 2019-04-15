import { connect } from 'react-redux';
import ScheduleMainBlock from './ScheduleMainBlock';
import { selectOneLesson } from "../../../selectors/lessonAndBreakDurationEventSelector";
import { selectSpeakerForEventById } from '../../../selectors/speakerEventSelector';
import { selectScheduleById } from '../../../selectors/scheduleTypeSelector';
import { selectEventDay } from '../../../selectors/dayForEventSelector';
import { selectEventValues } from '../../../selectors/eventsSelectors';

const mapStateToProps = (state) => ({
    scheduleId: selectScheduleById(state, 1, "scheduleID"),
    speakerById: selectSpeakerForEventById(state),
    lessonById: selectOneLesson(state),
    day: selectEventDay(state),
    events: selectEventValues(state),
});

export default connect(mapStateToProps)(ScheduleMainBlock);
