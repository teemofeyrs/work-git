import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/rudux-store'
import { Provider } from 'react-redux'

export const MainApp = () => {
  return (
      <Provider store={store}>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </Provider>
  );
};
let rerenderEntireTree = () => {
    ReactDOM.render(
        <MainApp/>,
        document.getElementById('root')
    );
};
rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
})

serviceWorker.unregister();
