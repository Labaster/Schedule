import styled from "styled-components";

export default styled.div`
    ${props => props.show ?
    `
    background: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9998;
    ` : 
    ``
}`;
