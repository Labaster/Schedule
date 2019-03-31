import styled from 'styled-components';
import menu from '../../../../static/img/menu_button.png';

export default styled.div`
  	display: none;
  	flex: 0 0 auto;
  	width: 20px;	  
   	height: 16px;
	padding: 0;
	background: transparent url(${menu}) no-repeat right top;
  	cursor: pointer;
  
  	@media (max-width: 768px) {
  		display: flex;
  		order: 2;
  	}
`;
