import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';

import App from './components/App';


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

/*
telling  react app that we have a global state
Provider: makes the Redux store available to any nested components that have been wrapped in the connect function
After this, instead of rendering our App component directly, we render it through our Provider using the store that we’ve created like so:
 */
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
