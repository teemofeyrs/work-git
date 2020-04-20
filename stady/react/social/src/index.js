import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';


export let renderTree = (state) => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <App state={store.getState()}
                     dispach={store.dispach.bind(store)}/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    );
};
renderTree(store.getState());
store.subscribe(renderTree);

serviceWorker.unregister();
