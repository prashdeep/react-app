import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';

const router = (
    <Router>
        <ul>
            <li><Route exact path="/" component={App}/> </li>
            <li><Route path="/main" component={Main}/></li>
            <li><Route path="/about" component={About}/></li>
        </ul>
    </Router>
)


ReactDOM.render(
    router, 
    document.getElementById('root'));

