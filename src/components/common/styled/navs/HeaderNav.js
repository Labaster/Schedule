import styled from "styled-components";

export default styled.nav`
	width: inherit;
	display: flex;
	flex-direction: row;
	flex: 1 1 0;
	justify-content: start;
	
	@media (max-width: 768px) {
  	    flex-direction: column;
  	    justify-content: stretch;   
    }
	
    
`;