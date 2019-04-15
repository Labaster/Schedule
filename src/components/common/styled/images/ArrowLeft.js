import styled from 'styled-components';
import arrowLeft from '../../../../static/img/arrow-left.png';
import arrowLeftSuccess from '../../../../static/img/arrow-left-success.png';

export default styled.div`
	display: flex;
  	width: 12px;
  	height: 12px;
  	background: url(${arrowLeft}) no-repeat right top;
  	
  	& :hover {
  		background: url(${arrowLeftSuccess}) no-repeat right top;
  	}
`;