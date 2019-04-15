import React, { Component } from "react";
import { StickyContainer, Sticky } from 'react-sticky';
import ScheduleAside from "../../common/styled/grid/ScheduleAside.js";
import ScheduleCell from '../../common/styled/grid/ScheduleCell.js';
import ScheduleHeaderCell from "../../common/styled/grid/ScheduleHeaderCell.js";
import ScheduleHeaderCellFirstNameDay from "../../common/styled/elements_grid_day_admin/ScheduleHeaderCellFirstNameDay.js";
import ScheduleHeaderCellFirstData from "../../common/styled/elements_grid_day_admin/ScheduleHeaderCellFirstData.js";
import HeaderCellContent from '../../common/styled/elements_grid_day_admin/HeaderCellContent';
import ScheduleAsideCellContent from '../../common/styled/elements_grid_day_admin/ScheduleAsideCellContent';
import CellContentLessonCount from '../../common/styled/elements_grid_day_admin/CellContentLessonCount.js';
import CellContentLessonDuration from '../../common/styled/elements_grid_day_admin/CellContentLessonDuration';

class ScheduleAsideBlock extends Component {
	render() {
		const { lessons, day } = this.props;
		return (
			(lessons && day) ?
			<>
				<ScheduleAside>
					<StickyContainer>
						<Sticky>
							{ ({ style }) => (
								<ScheduleHeaderCell style={style} className='ScheduleHeaderCell'>
									<HeaderCellContent>
										<ScheduleHeaderCellFirstNameDay>{day.dayOfWeek}</ScheduleHeaderCellFirstNameDay>
										<ScheduleHeaderCellFirstData><sup>{day.dayAndMonth}</sup></ScheduleHeaderCellFirstData>
									</HeaderCellContent>
								</ScheduleHeaderCell>
							)}
						</Sticky>
						{Object.keys(lessons).map((key, index) => {
							return (
								<ScheduleCell key={index}>
									<ScheduleAsideCellContent>
										<CellContentLessonCount><div>{key} ПАРА</div></CellContentLessonCount>
										<CellContentLessonDuration>{lessons[key]}</CellContentLessonDuration>
									</ScheduleAsideCellContent>
								</ScheduleCell>
							)
						})}
					</StickyContainer>

				</ScheduleAside>
			</> : null
		)
	}
}

export default ScheduleAsideBlock
