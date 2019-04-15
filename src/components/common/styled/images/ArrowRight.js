import styled from 'styled-components';
import arrowRight from '../../../../static/img/arrow-right.png';
import arrowRightSuccess from '../../../../static/img/arrow-right-success.png';

export default styled.div`
	display: flex;
  	width: 12px;
  	height: 12px;
  	background: url(${arrowRight}) no-repeat right top;
  	
  	& :hover {
  		background: url(${arrowRightSuccess}) no-repeat right top;
  	}
`;