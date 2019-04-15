import styled from "styled-components";

export default styled.div`
	display: flex;
	flex-basis: 187px;
	flex-shrink: 0;
	justify-content: center;
 	align-content: center;
 	margin-top: 15px;
	min-width: 187px;
	height: 104px;
	background: ${props => props.changeColor ? "#d2fcda" : "#f8f8f8"};
};`
