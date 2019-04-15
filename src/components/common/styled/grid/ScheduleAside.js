import styled from "styled-components";

export default styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	width: 187px;
	min-width: 187px;
	align-content: start;
	
	height: 100%;
    overflow-y: hidden;
    
	& > div > div:not(.ScheduleHeaderCell) {
		border-radius: 20px 0 0 20px;
		border-right: 1.5px solid #dcdcdc;
		background: #f8f8f8;
	}
	
	& > div > div:nth-child(1) {
		border-radius: 0;
		border-right: none;
		background: white;
	}
	
	& > div > div:nth-child(2) {
		margin-top: 0;
	} 
`;