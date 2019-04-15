import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './layout/Layout';
import Routes from "./Routes";
import { connect } from "react-redux";

function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
    if(authenticated){
        return (
            <Router
                {...rest}
                render = {
                    (props) => <Component {...props} {...rest} />
                    }/>
        )
    } else {
        window.location.href = '/';
    }
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
                    <Routes/>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <Link to="/scheduleDay">Grid Day</Link>
                        </li>
                        <li>
                            <Link to="/scheduleWeek">Grid Week</Link>
                        </li>
                        <li>
                            <Link to="/scheduleMonth">Grid Month</Link>
                        </li>
                        <li>
                            <Link to="/schedule/creating/step_1">step_1</Link>
                        </li>
                        <li>
                            <Link to="/schedule/creating/step_2">step_2</Link>
                        </li>
                    </ul>
                </Layout>
            </AuthenticatedRoute>
        );
    }
}

const mapStateToProps = (state) => {
        if(!state.user.error) {
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
