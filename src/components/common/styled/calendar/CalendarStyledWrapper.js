import styled from 'styled-components';
import arrowWhite from '../../../../static/img/arrow-down-white.png';

export default styled.div`
	& > .rdrCalendarWrapper {
		overflow-x: hidden;
		width: 329px;
		height: 370px;
		border-radius: 8px;
  		box-shadow: 3.7px 8.2px 9.5px 0.5px #00000021;
  		background-color: #f8f8f8;
	}
	
	& .rdrCalendarWrapper .rdrDateDisplayWrapper {
		display: none;
		z-index: -999;
	}
	
	& .rdrCalendarWrapper .rdrMonthAndYearWrapper {
		
		width: 100%;
		height: 54px;
		padding-top: 0;
		background: #00d586;
		border-radius: 8px 8px 0 0;
		
		& button.rdrNextButton, 
		& button.rdrPprevButton {
			background: transparent;
		}
		
		& button.rdrPprevButton i {
			border-color: transparent #ffffff transparent transparent;
		}
		
		& button.rdrNextButton i {
			border-color: transparent transparent transparent #ffffff;
		}
		
		& .rdrMonthAndYearPickers .rdrMonthPicker select,
		& .rdrMonthAndYearPickers .rdrYearPicker select {
			color: white;
			background: url(${arrowWhite}) no-repeat right 8px center;
		}
	}
`;
