import styled from "styled-components";

export default styled.div`
	display: flex;
	flex-direction: row;
	
	
	& > div {
		border-right: 1.5px solid #dcdcdc;
		line-height: 68px;
	}
	
	& > div:last-of-type {
		border-radius: 0 20px 20px 0;
		border-right: none;
	}
`;