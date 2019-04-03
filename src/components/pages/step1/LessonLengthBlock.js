import React, { Component } from "react";
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import InputStyled from '../../common/styled/forms/InputStyled.js';

class LessonLengthBlock extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-xl-6 col-lg-6 col-md-6 mb-5">
                    <LabelStyledBold htmlFor="single_lesson_duration">
                        Тривалість одого заняття:
                    </LabelStyledBold>
                    <InputStyled
                        id="single_lesson_duration"
                        className="mb-4"
                        type="text"
                        name="lesson_duration"
                        placeholder="90(вказувати у хв)"
                        value={this.props.value}
                        onChange={this.props.handleSetLessonLength}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default LessonLengthBlock;
