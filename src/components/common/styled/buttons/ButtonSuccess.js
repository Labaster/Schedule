import styled from 'styled-components';

export default styled.button`
    width: 200px;
  	height: 40px;
  	border-radius: 11px;
  	background-color: #00d586;
  	font-family: 'FiraSans', sans-serif;
  	font-size: 24px;
  	line-height: 24px;
  	color: white;
  	margin: 0 20px;
  	
  	&:hover {
  		background-color: #28a745;
  		color: white;
  	}
  	
  	@media screen and (max-width: 540px)  and (min-width: 320px) {
  	    width: 135px;
        margin: 0 10px;  	    
  	}
`;

