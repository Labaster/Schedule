import styled from "styled-components";

export default styled.label`
	display: inline-block;
  	position: relative;
  	padding: 0 13px 0 24px;
  	margin-bottom: 12px;
  	cursor: pointer;
  	font-family: 'FiraSans', sans-serif;
  	font-size: 17px;
  	font-weight: 300;
  	line-height: 24px;
  	color: #909090;
  	-webkit-user-select: none;
  	-moz-user-select: none;
  	-ms-user-select: none;
  	user-select: none;

	> input:checked ~ span {
  	background-color: #a77eff;
	}

	> input:checked ~ span:after {
  	display: inline-block;
}
`;

