import React, { Component } from "react";
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import InputStyled from '../../common/styled/forms/InputStyled.js';

class OrganizationNameBlock extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 mb-5">
                    <LabelStyledBold htmlFor="#organization_name">
                        Назва навчального закладу:
                    </LabelStyledBold>
                    <InputStyled
                        id="organization_name"
                        className="mb-4"
                        type="text"
                        name="name"
                        placeholder="Введіть або оберіть назву навчального закладу"
                        value={this.props.value}
                        onChange={this.props.handleSetOrganizationName}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default OrganizationNameBlock;
