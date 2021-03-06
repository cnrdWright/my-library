import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './Root'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Root>
        <BrowserRouter >
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Root>, document.getElementById('root')
    );
