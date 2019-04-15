import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 27px;
	min-width: 148px;
	padding: 7px 12px;
	border-radius: 13.5px;
  	background-color: #f8f8f8;
  	
  	& button:nth-child(3) {
  		margin-right: 25px;
  	}
`;