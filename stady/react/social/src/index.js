import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/rudux-store';


export let renderTree = (state) => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <App state={state} store={store}
                     dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    );
};
renderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderTree(state);
});

serviceWorker.unregister();
