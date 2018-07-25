import React, {Component} from 'react';
import '../styles/App.css';
import IntroPage from './IntroPage'
import Header from "./Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="App-intro">
                    <IntroPage/>
                </div>
            </div>
        );
    }
}

export default App;
