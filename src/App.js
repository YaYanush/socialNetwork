import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Content from "./components/content/Content";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Content />
        </div>
    );
};



export default App;
