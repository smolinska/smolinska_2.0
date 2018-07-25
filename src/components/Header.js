import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/header.css';
import logo from '../logo.svg';

class Header extends Component {
    constructor() {
        super();
        // this.state = {
        //     pictures: []
        // }
    }

    render() {
        return (
            <div className="header">
                <header className="header-content">
                    <img src={logo} className="header-logo" alt="logo"/>
                    <h1 className="header-title">Menu</h1>
                </header>
            </div>
        )
    }
}

export default Header;