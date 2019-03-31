import styled from 'styled-components';

export default styled.span`
	font-family: 'FiraSans', sans-serif;
	font-size: 12px; 
	padding: auto 0;		
	letter-spacing: normal;
	color: white;
	text-decoration: none;
	cursor: pointer;
	
	 &:hover {
	 	color: #837d95;
	    text-decoration: none;
	 }
	 
	@media (max-width: 425px) {
    	font-size: 20px;
    }
    	
 	
    	
	@media (min-width: 1920px) {
        font-size: 16px;
    }
`;
