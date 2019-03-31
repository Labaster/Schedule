import styled from "styled-components";

export default styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #a77eff;
  border-radius: 50%;
  margin: 5px 0;

  &:after {
    content: "";
    position: absolute;
    display: none;
 	top: 4px;
  	left: 4px;
	width: 6px;
  	height: 6px;	  
  	border-radius: 50%; 
  	background: white;
  }
`;