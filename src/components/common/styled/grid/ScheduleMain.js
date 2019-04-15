import styled from "styled-components";

export default styled.div`
	display: flex;
	flex-direction: column;
	min-width: 100%;
	overflow-x: scroll;
  	overflow-y: hidden;
  	height: 100%;
  	width: 100%;
  	
  	& div:nth-child(2) > div {
  		margin-top: 0;
  	}
`;