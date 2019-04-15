import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/';
import { getUserDetails } from './helpers/fetchHelper'

getUserDetails().then(user => {
    const store = createStore(reducer);
    store.dispatch({
        type: 'ADD_USER',
        payload: user,
    });
        render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('root'));
});


