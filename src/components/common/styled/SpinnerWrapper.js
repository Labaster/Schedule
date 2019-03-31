import styled from "styled-components";

export default styled.div`
    ${props => props.show ?
    `
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     z-index: 9999;
    ` :
    `
    display: none;
    `
}`;
