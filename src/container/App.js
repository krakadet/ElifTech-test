import './App.css';
import React, {Component} from 'react';
import store from '../store/store'
import {Provider} from 'react-redux'
import Root from './root/Root'



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}

export default App;