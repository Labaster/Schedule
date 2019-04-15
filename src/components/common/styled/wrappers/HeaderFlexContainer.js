import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: start;
	width: 100%;
	min-height: 79px;
  	padding: 14px 50px;
  	color: white;
  	background-color: #635c7c;
  	
  	@media (max-width: 425px) {
  		padding: 14px 20px;
  	}
  	
  	@media (min-width: 320px) {
  		justify-content: space-between;
  	}
  	
`;