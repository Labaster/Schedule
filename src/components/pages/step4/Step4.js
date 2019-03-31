import React, { Component } from "react";
import { Link } from "react-router-dom";

import Title from '../../common/styled/text/Title.js';
import InputStyled from '../../common/styled/forms/InputStyled';
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import ButtonSuccess from '../../common/styled/buttons/ButtonSuccess';
import ButtonRegular from '../../common/styled/buttons/ButtonRegular';
import ButtonGreenPlus from '../../common/styled/buttons/ButtonGreenPlus';


class Step4 extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12 mt-5 mb-5">
                        <Title className="text-center mt-5 mb-5">
                            4.Введіть данні:
                        </Title>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 mt-5 mb-5">
                                <LabelStyledBold htmlFor="event_name">
                                    Введіть корпуси Вашого навчального закладу:
                                </LabelStyledBold>
                                <div className="d-flex justify-content-start">
                                    <div className="w-100">
                                        <InputStyled
                                            id="event_name"
                                            type="text"
                                            name="event_name"
                                            placeholder="Введіть данні"
                                        />
                                    </div>
                                    <div className="">
                                        <ButtonGreenPlus/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 mb-5">
                                <LabelStyledBold htmlFor="event_name">
                                    Введіть аудиторії/класи Вашого навчального закладу:
                                </LabelStyledBold>
                                <div className="d-flex justify-content-start">
                                    <div className="w-100">
                                        <InputStyled
                                            id="event_name"
                                            type="text"
                                            name="event_name"
                                            placeholder="Додайте усі класи/аудиторії"
                                        />
                                    </div>
                                    <div className="">
                                        <ButtonGreenPlus/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                            <div className="d-flex justify-content-around">
                            <Link to="/schedule/creating/step_3">
                                <ButtonRegular
                                    className="btn btn-lg"
                                    type="submit"
                                    onSubmit={this.handleSubmit}
                                >
                                    Назад
                                </ButtonRegular>
                            </Link>
                            <Link to="#">
                                <ButtonSuccess
                                    className="btn btn-lg"
                                    type="submit"
                                    onSubmit={this.handleSubmit}
                                >
                                    Далі
                                </ButtonSuccess>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default Step4;
