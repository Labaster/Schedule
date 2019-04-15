import styled from 'styled-components';
import pencil from '../../../../static/img/pencil.png';
import pencilGreen from '../../../../static/img/pencil-success.png';

export default styled.div`
	position: absolute;
  	top: 28px;
  	right: 12px;
  	width: 12px;
  	height: 11px;
  	background: url(${pencil}) no-repeat right top; 
  	
  	& :hover {
  		background: url(${pencilGreen}) no-repeat right top; 
  	}
`;