import React from 'react';
import { connect } from 'react-redux';
import { getInitData } from '../../../helpers/fetchHelper.js';

class CalendarIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            initData: {},
            errors: [],
        }
    }

    componentDidMount(){
        this.clearInitData();
        this.setState({ isLoading: true });
        getInitData().then(initData => {
                this.dispatchToStore(initData.data);
            })
            .then( (res) => {
            console.log(res);
            this.setState({
                isLoading: false,
            });
        })
            .catch(error => {
            this.setState({ errors: error });
        });
    }

    dispatchToStore = (data) => {
        this.props.dispatch({
            type: 'ADD_INIT_DATA',
            payload: data,
        });
    };

    clearInitData = () => {
        this.props.dispatch({
            type: 'DELETE_INIT_DATA',
            payload: undefined,
        });
    };

    render() {
        const { isLoading } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="col-xl-3">
                            CalendarBlock
                            <br/>
                            FilterBlock
                            <br/>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <h3>
                            { isLoading ?
                                <p>Loading ...</p> :
                                <p>{JSON.stringify(this.props.initData)}</p>
                            }
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        initData: state.initData,
    }
};

export default connect(mapStateToProps)(CalendarIndex);
