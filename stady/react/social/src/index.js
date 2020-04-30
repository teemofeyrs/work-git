import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/rudux-store';
import Provider from "react-redux/lib/components/Provider";

let state = store.getState();
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                <App state={state}/>
                </Provider>
            </React.StrictMode>,
            document.getElementById('root')
        )


serviceWorker.unregister();
