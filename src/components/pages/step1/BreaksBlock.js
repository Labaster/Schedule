import React, { Component } from "react";
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import SelectStyled from '../../common/styled/forms/select/SelectStyled.js';
import SelectWrapper from '../../common/styled/wrappers/SelectWrapper';

const typesOfBreak = [
    {
        value: '0',
        name: '0'
    },
    {
        value: '5',
        name: '5 хвилин'
    },
    {
        value: '10',
        name: '10 хвилин'
    },
    {
        value: '15',
        name: '15 хвилин'
    },
    {
        value: '20',
        name: '20 хвилин'
    },
    {
        value: '25',
        name: '25 хвилин'
    },
    {
        value: '30',
        name: '30 хвилин'
    }
];

class BreaksBlock extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-xl-6 col-lg-6 col-md-6 mb-5">
                    <LabelStyledBold>
                        Перерви між заняттями:
                    </LabelStyledBold>
                    <SelectWrapper>
                        <SelectStyled
                            value={this.props.value}
                            onChange={this.props.handleSetBreak}
                        >
                            {typesOfBreak.map((typesOfBreak, index) => {
                                return ( <option key={index} value={typesOfBreak.value}>{typesOfBreak.name}</option>)
                            })}
                        </SelectStyled>
                    </SelectWrapper>
                </div>
            </React.Fragment>
        )
    }
}

export default BreaksBlock;
