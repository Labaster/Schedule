import React, { Component } from "react";
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import SelectWrapper from '../../common/styled/wrappers/SelectWrapper';
import SelectStyled from '../../common/styled/forms/select/SelectStyled.js';

const typesSchedule = [
        {
            value: '',
            name: 'Для...'
        },
        {
            value: '1',
            name: 'Для навчального закладу'
        },
        {
            value: '2',
            name: 'Для компанії'
        },
        {
            value: '3',
            name: 'Для організації'
        }
        ];

class ScheduleTypeBlock extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 mb-5">
                    <LabelStyledBold htmlFor="select_schedule_type">
                        Тип розкладу:
                    </LabelStyledBold>
                    <SelectWrapper className="mb-4">
                        <SelectStyled
                            ref={this.props.elementWidth}
                            id="select_schedule_type"
                            value={this.props.value}
                            onChange={this.props.handleSetScheduleType}
                        >
                            {typesSchedule.map((typeSchedule, index) => {
                                return ( <option key={index} value={typeSchedule.value}>{typeSchedule.name}</option>)
                            })}
                        </SelectStyled>
                    </SelectWrapper>
                </div>
            </React.Fragment>

        )
    }
}

export default ScheduleTypeBlock;
