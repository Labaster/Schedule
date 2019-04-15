import styled from 'styled-components';

export default styled.button`
	display: flex;
	padding: 0 28px;
 	height: 27px;
  	border-radius: 13px;
  	background-color: ${props => props.success ? "#00d586" : "#f8f8f8"};
  	border: none;
  	font-family: FiraSans, sans-serif;
  	font-size: 14px;
  	line-height: 24px;
  	letter-spacing: -0.1px;
  	text-align: center;
  	color: ${props => props.success ? "white" : "#808080"};
  	margin-right: 15px;
  	
  	&:hover {
  		background-color: #808080;
  		color: white;
  	}
`;