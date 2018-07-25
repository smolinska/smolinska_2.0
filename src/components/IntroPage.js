import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/intro-page.css';

class IntroPage extends Component {
    constructor() {
        super();
        // this.state = {
        //     pictures: []
        // }
    }

    render() {
        return (
            <div className="intro-page">
                <div className="name">
                    Smolińska
                </div>
                <div>
                    <i className="fa fa-angle-down"></i>
                </div>
            </div>
        )
    }
}

export default IntroPage;