
import * as serviceWorker from './serviceWorker';
import store, {addPost, subscribe, updatePost} from './redux/store'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";

export let renderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};
    renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
