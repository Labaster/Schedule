import { connect } from 'react-redux';
import ScheduleAsideBlock from './ScheduleAsideBlock';
import { selectLessons } from "../../../selectors/lessonAndBreakDurationEventSelector";
import { selectEventDayFormatted } from "../../../selectors/dayForEventSelector";

const mapStateToProps = (state) => {
    return {
        lessons: selectLessons(state),
        day: selectEventDayFormatted(state),
    }
};

export default connect(mapStateToProps)(ScheduleAsideBlock);
