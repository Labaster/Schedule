import React, { Component } from "react";
import { createEvent, updateEvent } from '../../helpers/fetchHelper'

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show_form: false,
            title: '',
            company_id: '',
            speaker_id: '',
            room_id: '',
            group_id: '',
            start: '',
            end: '',
            desc: '',
        };
        this.handleSetCompany = this.handleSetCompany.bind(this);
        this.handleSetName = this.handleSetName.bind(this);
        this.handleSetRoom = this.handleSetRoom.bind(this);
        this.handleSetGroup = this.handleSetGroup.bind(this);
        this.handleSetEventName = this.handleSetEventName.bind(this);
        this.handleSetEventStarts = this.handleSetEventStarts.bind(this);
        this.handleSetEventEnds = this.handleSetEventEnds.bind(this);
        this.handleSetDescription = this.handleSetDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showForm = (show_form) => this.setState({ show_form: !this.state.show_form });

    setDefaults = ( show_form, title, company_id, speaker_id, room_id, group_id, start, end, desc ) =>
        this.setState({ show_form, title, company_id, speaker_id, room_id, group_id, start, end, desc });

    handleSetCompany(event) {
        this.setState({company_id: event.target.value});
    }

    handleSetName(event) {
        this.setState({speaker_id: event.target.value});
    }

    handleSetEventName(event) {
        this.setState({title: event.target.value});
    }

    handleSetRoom(event) {
        this.setState({room_id: event.target.value});
    }

    handleSetGroup(event) {
        this.setState({group_id: event.target.value});
    }

    handleSetEventStarts(event) {
        this.setState({start: (event.target.value)});
    }

    handleSetEventEnds(event) {
        this.setState({end: (event.target.value)});
    }

    handleSetDescription(event) {
        this.setState({desc: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.company_id.length === 0
            || this.state.speaker_id.length === 0
            || this.state.title.length === 0
            || this.state.room_id.length === 0
            || this.state.group_id.length === 0
            || this.state.start.length === 0
            || this.state.end.length === 0
            || this.state.desc.length === 0)
        {console.log(this.state);}
        else {
            const eventObj = (this.state);
            delete eventObj['show_form'];

            createEvent(eventObj)
                .then(res =>
                console.log(res));
        }

        this.setDefaults();
    }

    render() {
      const { show_form } = this.state;
        return (
            <div>
                <br/>
                <button onClick={this.showForm}>
                    {this.state.show_form ? "Hide form" : "Create new event"}
                </button>
                <br/>
              {
                  !show_form ? null : (
                    <form onSubmit={this.handleSubmit}>
                      <label>
                          company_id:
                        <input type="text" value={this.state.company_id} onChange={this.handleSetCompany} required/>
                      </label>
                      <br/>
                      <label>
                          speaker_id:
                        <input type="text" value={this.state.speaker_id} onChange={this.handleSetName} required/>
                      </label>
                      <br/>
                      <label>
                          title:
                        <input type="text" value={this.state.title} onChange={this.handleSetEventName} required/>
                      </label>
                      <br/>
                      <label>
                          room_id:
                        <input type="text" value={this.state.room_id} onChange={this.handleSetRoom} required/>
                      </label>
                        <br/>
                        <label>
                            group_id:
                            <input type="text" value={this.state.group_id} onChange={this.handleSetGroup} required/>
                        </label>
                      <br/>
                      <label>
                        start:
                        <input type="text" value={this.state.start} onChange={this.handleSetEventStarts} required/>
                      </label>
                      <br/>
                      <label>
                        end:
                        <input type="text" value={this.state.end} onChange={this.handleSetEventEnds} required/>
                      </label>
                      <br/>
                      <label>
                        desc:
                        <textarea  value={this.state.desc} onChange={this.handleSetDescription} required/>
                      </label>
                      <br/>
                      <input type="submit" value="Submit" />
                    </form>
                  )
              }
            </div>
        );
    }
}

export default InputForm;
