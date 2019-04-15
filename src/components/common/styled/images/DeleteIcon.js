import styled from 'styled-components';
import trashCan from '../../../../static/img/trash-can.png';
import trashCanRed from '../../../../static/img/trash-can-danger.png';

export default styled.div`
	position: absolute;
  	top: 10px;
  	right: 10px;
  	width: 12px;
  	height: 12px;
  	background: url(${trashCan}) no-repeat right top; 
  	
  	& :hover {
  		background: url(${trashCanRed}) no-repeat right top; 
  	}
`;
