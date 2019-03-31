import React, { Component } from "react";
import { Link } from "react-router-dom";

import Title from '../../common/styled/text/Title.js';
import InputStyled from '../../common/styled/forms/InputStyled.js';
import LabelStyledBold from '../../common/styled/forms/LabelStyledBold';
import SelectWrapper from '../../common/styled/wrappers/SelectWrapper';
import SelectStyled from '../../common/styled/forms/select/SelectStyled.js';
import ButtonSuccess from '../../common/styled/buttons/ButtonSuccess';
import ButtonGreenPlus from '../../common/styled/buttons/ButtonGreenPlus';
import ButtonRegular from '../../common/styled/buttons/ButtonRegular';
import LabelRadio from "../../common/styled/forms/radio/LabelRadio";
import RadioStyled from "../../common/styled/forms/radio/RadioStyled";
import RadioCheckedMask from "../../common/styled/forms/radio/RadioCheckedMask";


class Step3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.daysOfTheWeek = [
            {
                value: '1',
                name: 'ПН'
            },
            {
                value: '2',
                name: 'ВТ'
            },
            {
                value: '3',
                name: 'СР'
            },
            {
                value: '4',
                name: 'ЧТ'
            },
            {
                value: '5',
                name: 'ПТ'
            },
            {
                value: '6',
                name: 'СБ'
            },
            {
                value: '7',
                name: 'НД'
            }
        ];
    }

    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12 mt-5 mb-5">
                        <Title className="text-center mt-5 mb-5">
                            3.Введіть данні:
                        </Title>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 6 col-sm-12 col-12 mt-5 mb-5">
                                <LabelStyledBold htmlFor="single_lesson_duration">
                                    Введіть назви/номери класів/груп:
                                </LabelStyledBold>
                                <div className="d-flex justify-content-start">
                                    <div className="w-100">
                                        <InputStyled
                                            id="single_lesson_duration"
                                            className="mb-4"
                                            type="text"
                                            name="lesson_duration"
                                            placeholder="Додайте усі класи/групи"
                                        />
                                    </div>
                                    <div>
                                        <ButtonGreenPlus/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-5 mb-5">
                                <LabelStyledBold>
                                    Навчальні дні:
                                </LabelStyledBold>
                                <div className="d-flex justify-content-start w-100">
                                <SelectWrapper className="col-xl-4 col-md-5 col-sm-3 col-4 w-25 mr-5">
                                    <SelectStyled
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    >
                                        {this.daysOfTheWeek.map((daysOfTheWeek, index) => {
                                            return ( <option key={index} value={daysOfTheWeek.value}>{daysOfTheWeek.name}</option>)
                                        })}
                                    </SelectStyled>
                                </SelectWrapper>
                                <SelectWrapper className="col-xl-4 col-md-5 col-sm-3 col-4 w-25">
                                    <SelectStyled
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    >
                                        {this.daysOfTheWeek.map((daysOfTheWeek, index) => {
                                            return ( <option key={index} value={daysOfTheWeek.value}>{daysOfTheWeek.name}</option>)
                                        })}
                                    </SelectStyled>
                                </SelectWrapper>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
                                <LabelStyledBold>
                                    Уточніть:
                                </LabelStyledBold>
                                <div>
                                    <LabelRadio>Студент
                                        <RadioStyled type="radio" name="radio" defaultChecked/>
                                        <RadioCheckedMask/>
                                    </LabelRadio>
                                    <LabelRadio>Учень
                                        <RadioStyled type="radio" name="radio" />
                                        <RadioCheckedMask/>
                                    </LabelRadio>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
                                <LabelStyledBold htmlFor="single_lesson_duration">
                                    Введіть імена студентів:
                                </LabelStyledBold>
                                <div className="d-flex justify-content-start">
                                    <div className="w-100">
                                        <InputStyled
                                            id="single_lesson_duration"
                                            className="mb-4"
                                            type="text"
                                            name="lesson_duration"
                                            placeholder="Введіть данні"
                                        />
                                    </div>
                                    <div className="">
                                        <ButtonGreenPlus/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div className="d-flex justify-content-around">
                               <Link to="/schedule/creating/step_2">
                                   <ButtonRegular
                                       className="btn btn-lg"
                                       type="submit"
                                       onSubmit={this.handleSubmit}
                                   >
                                       Назад
                                   </ButtonRegular>
                               </Link>
                               <Link to="/schedule/creating/step_4">
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

export default Step3;
