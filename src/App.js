
import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Content from "./components/content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav store={props.store}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path = '/users' render={() => <UsersContainer store={props.store}/>}/>
                    <Route path='/profile' render={() => <Content store={props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                    {/*<Route path = '/dialogs' component = {Dialogs} />
                <Route path = '/profile' component = {Content} />
                <Route path = '/news' component = {News} />
                <Route path = '/music' component = {Music} />*/}
                </div>
            </div>
    );
};


export default App;
