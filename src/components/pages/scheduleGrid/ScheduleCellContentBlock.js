import React, { Component } from "react";
import ScheduleCellContent from '../../common/styled/elements_grid_day_admin/ScheduleCellContent.js';
import DeleteIcon from '../../common/styled/images/DeleteIcon.js';
import EditIcon from '../../common/styled/images/EditIcon.js';
import LocationIcon from '../../common/styled/images/LocationIcon.js';
import GroupIcon from '../../common/styled/images/GroupIcon.js';
import CellContentHeader from '../../common/styled/elements_grid_day_admin/CellContentHeader.js';
import CellContentHeaderEventName from '../../common/styled/elements_grid_day_admin/CellContentHeaderEventName.js';
import CellContentHeaderNotes from '../../common/styled/elements_grid_day_admin/CellContentHeaderNotes.js';
import CellContentBody from '../../common/styled/elements_grid_day_admin/CellContentBody.js';
import CellContentBodyRow from '../../common/styled/elements_grid_day_admin/CellContentBodyRow.js';
import CellContentBodyRowText from '../../common/styled/elements_grid_day_admin/CellContentBodyRowText.js';

class ScheduleCellContentBlock extends Component {
    constructor(props) {
        super(props);
        const { changeCellBackground } = this.props;
        changeCellBackground(true);
    }
    render() {
        const { keyComponent, event } = this.props;
        return(
                <ScheduleCellContent>
                    <CellContentHeader>
                        <CellContentHeaderEventName key={keyComponent}>
                            {event.subject_name}
                        </CellContentHeaderEventName>
                        <CellContentHeaderNotes>
                            <span>{event.desc}</span>
                        </CellContentHeaderNotes>
                    </CellContentHeader>
                    <CellContentBody>
                        <CellContentBodyRow>
                            <LocationIcon />
                            <CellContentBodyRowText>
                                {event.room_name}
                            </CellContentBodyRowText>
                        </CellContentBodyRow>
                        <CellContentBodyRow>
                            <GroupIcon />
                            <CellContentBodyRowText>
                                GROUP is **ХЗ**
                            </CellContentBodyRowText>
                        </CellContentBodyRow>
                    </CellContentBody>
                    <DeleteIcon />
                    <EditIcon />
                </ScheduleCellContent>
        )
    }
}

export default ScheduleCellContentBlock;
