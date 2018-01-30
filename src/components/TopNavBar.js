import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 chassName="App-title">Welcome to NBA</h1>
            </header>
        );
    }
}

