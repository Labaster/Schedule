import React from 'react'
import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'
import 'react-big-calendar/lib/less/styles.less'
import '../../../../public/styles.less'
import '../../../../public/prism.less'
import '../../../../public/personalStylesCalendar.css'
import Calendar from './Calendar'

const globalizeLocalizer = localizer(globalize);

class AppCalendar extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {}
    }
    render() {
        return (
            <div className="app">
                <div className="examples">
                    <div className="example">
                        <Calendar localizer={globalizeLocalizer} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AppCalendar;

