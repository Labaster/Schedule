import styled from 'styled-components';

export default styled.button`
    width: 200px;
  	height: 40px;
  	border-radius: 11px;
  	background-color:  #a77eff;
  	font-family: 'FiraSans', sans-serif;
  	font-size: 24px;
  	line-height: 24px;
  	color: white;
  	margin: 0 20px;
  	
  	&:hover {
  		background-color: #665c7e;
  		color: white;
  	}
  	@media screen and (max-width: 540px)  and (min-width: 320px) {
  	    width: 135px;
        margin: 0 10px;  	    
  	}
`;

