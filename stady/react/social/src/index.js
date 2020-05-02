import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/rudux-store';
import {Provider} from 'react-redux';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>,
        document.getElementById('root')
    );
};
rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
})

serviceWorker.unregister();
