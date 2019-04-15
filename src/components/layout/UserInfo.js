import React, { Component } from 'react';
import HeaderUserSectionItem from "../common/styled/navs/HeaderUserSectionItem";
import HeaderLink from "../common/styled/links/HeaderLink";
import HeaderUserSection from "../common/styled/navs/HeaderUserSection";
import HeaderUserLogo from "../common/styled/images/HeaderUserLogo";
import {connect} from "react-redux";

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {props};
    }

    render() {
        const user = this.state;
        const userInfo = ( user !== undefined ) ? (
            <HeaderUserSection>
                <HeaderUserSectionItem>
                    <HeaderLink key={user.props.id} href="#">{user.props.first_name} {user.props.last_name}</HeaderLink>
                </HeaderUserSectionItem>
                <HeaderLink href="#"><HeaderUserLogo src={user.props.avatar} alt="avatar" /></HeaderLink>
            </HeaderUserSection>
        ) : (
            <HeaderUserSection>
                <HeaderUserSectionItem>
                    <HeaderLink href="#">Користувач</HeaderLink>
                </HeaderUserSectionItem>
                <HeaderLink href="#"><HeaderUserLogo src="public/build/img/login.png" alt="avatar" /></HeaderLink>
            </HeaderUserSection>
        );
        return (
            <div>{userInfo}</div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
            first_name: state.user.first_name,
            last_name: state.user.last_name,
            id: state.user.id,
            avatar: state.user.picture.data.url,
        }
};

export default connect(mapStateToProps)(UserInfo);

