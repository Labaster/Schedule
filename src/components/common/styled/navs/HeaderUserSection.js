import styled from 'styled-components';

export default styled.div`
	width: inherit;
	display: flex;
	align-content: center;
	margin-right: 83px;
	height: 49px;
	
	@media (max-width: 576px) {
		margin-right: 34px;
	}
	
	@media (min-width: 768px) {
		justify-content: space-between;
	}
	
    @media (min-width: 992px) {
  	    margin-right: 25px;
    }
    
    @media (min-width: 1200px) {
      margin-right: 40px;
    }
    
    @media (min-width: 1280px) {
      margin-right: 60px;
    }
`;
