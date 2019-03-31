import styled from 'styled-components';
import logo from '../../../../static/img/logo.png';

export default styled.div`
	display: flex;
	flex: 0 0 auto;
	order: 1;
	width: 163px;
	height: 51px;
	padding: 0;
	background: url(${logo}) no-repeat right top; 
	
	
	@media (min-width: 992px) {
  	 margin-right: 40px;
    }
    
	@media (min-width: 1280px) {
    	margin-right: 60px;
  	}
	
	@media (min-width: 1325px) {
    	margin-right: 80px;
  	}
	@media (min-width: 1570px) {
    	margin-right: 100px;
  	}
  	
  	@media (min-width: 1920px) {
    	margin-right: 166px;
  	}
  	
`;
