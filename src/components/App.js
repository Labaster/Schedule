import React, { Component } from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './layout/Layout';
import Routes from "./Routes";
import {connect} from "react-redux";

function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
    // console.log(rest);
    // console.log(Component);
    // console.log(authenticated);
    return (
        <Router
            {...rest}
            render = {(props) => authenticated === true
                ? <Component {...props} {...rest} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}} />} />
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {props};
    }
    render() {
        return (
            <AuthenticatedRoute authenticated={this.props.authenticated}>
                <Layout>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <Link to="/schedule">Calendar</Link>
                        </li>
                        <li>
                            <Link to="/schedule/schedule_grid">Grid</Link>
                        </li>
                        <li>
                            <Link to="/schedule/creating/step_1">step_1</Link>
                        </li>
                        <li>
                            <Link to="/schedule/creating/step_2">step_2</Link>
                        </li>
                    </ul>
                    <Routes/>
                </Layout>
            </AuthenticatedRoute>
        );
    }
}

const mapStateToProps = (state) => {
        if(state.user) {
            return {
                Component: App,
                currentUser: state.user,
                authenticated: true,
                store: state
            }
        }else{
            return{
                Component: App,
                currentUser: null,
                authenticated: false,
                store: state
            }
        }
};

export default connect(mapStateToProps)(App);
