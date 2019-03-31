import React, { Component } from "react"
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import data from '../../../helpers/generate-data'
import { getAllEvents } from "../../../helpers/fetchHelper";

const DragAndDropCalendar = withDragAndDrop(BigCalendar);
// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
    constructor(props) {
        super(props);

        let events = data;
        this.state = {
            events
        };
        this.moveEvent = this.moveEvent.bind(this);
        this.newEvent = this.newEvent.bind(this);
    }

    // componentDidMount() {
    //     getAllEvents().then(
    //         res => {
    //             console.log(res.data);
    //             this.setState( {events: res.data});
    //            // this.setState({ events:
    //            // [
    //            //     {
    //            //         id: 1,
    //             //        event_name: 'ENG',
    //             //        organization_name: 'INTITA',
    //             //        room_name: 'square',
    //             //        speaker_name: 'Jon',
    //             //        tarts: new Date(2019, 2, 12, 9, 0),
    //             //        ends: new Date(2019, 2, 12, 10, 30),
    //             //        comment: 'test1'
    //            //     },
    //            //     {
    //            //         id: 100,
    //            //         title: 'All Day Event very long title',
    //            //         allDay: true,
    //            //         start: new Date(2015, 3, 0),
    //            //         end: new Date(2015, 3, 1),
    //            //     }
    //            // ]});
    //             console.log(this.state.events);
    //         });
    // }

    moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
        const { events } = this.state;

        const idx = events.indexOf(event);
        let allDay = event.allDay;

        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
        }

        const updatedEvent = { ...event, start, end, allDay };

        const nextEvents = [...events];
        nextEvents.splice(idx, 1, updatedEvent);

        this.setState({
            events: nextEvents,
        })

        // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
    }

    resizeEvent = ({ event, start, end }) => {
        const { events } = this.state;

        const nextEvents = events.map(existingEvent => {
            return existingEvent.id === event.id
                ? { ...existingEvent, start, end }
                : existingEvent
        });

        this.setState({
            events: nextEvents,
        })

        //alert(`${event.title} was resized to ${start}-${end}`)
    };

    newEvent(event) {
        // let idList = this.state.events.map(a => a.id)
        // let newId = Math.max(...idList) + 1
        // let hour = {
        //   id: newId,
        //   title: 'New Event',
        //   allDay: event.slots.length == 1,
        //   start: event.start,
        //   end: event.end,
        // }
        // this.setState({
        //   events: this.state.events.concat([hour]),
        // })
    }

    render() {
        return (
            <DragAndDropCalendar
                // components={{toolbar: MyToolbar}}
                selectable
                localizer={this.props.localizer}
                events={this.state.events}
                onEventDrop={this.moveEvent}
                resizable
                onEventResize={this.resizeEvent}
                onSelectSlot={this.newEvent}
                // views={allViews}
                step={15}
                timeslots={1}
                showMultiDayTimes={true}
                defaultView={BigCalendar.Views.WEEK}
                defaultDate={new Date()}

            />
        )
    }

}

function MyToolbar() {
    return (
        <div>

        </div>
    )
}

export default Calendar;
