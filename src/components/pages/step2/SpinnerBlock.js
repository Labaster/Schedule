import React, { Component } from "react";
import SpinnerWrapper from '../../common/styled/SpinnerWrapper.js';
import SpinnerText from '../../common/styled/SpinnerText.js';
import { PacmanLoader } from 'react-spinners';

class SpinnerBlock extends Component {
    render() {
        return (
            <SpinnerWrapper
                show={this.props.show}
            >
                <PacmanLoader
                    sizeUnit={"px"}
                    size={70}
                    color={'#FDE525'}
                    loading={this.props.show}
                />
                <SpinnerText>
                    зачекайте......
                </SpinnerText>
            </SpinnerWrapper>
        )
    }
}

export default SpinnerBlock;
