import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    browserHistory
} from 'react-router';
import Root from './pages/App/App';
import './index.css';

import Home from './pages/Home/Home';
import Example from './pages/Example/Example';

ReactDOM.render(
    /* /src/index.js */
    <Router history={browserHistory}>
        <Route path="/" component={Root} />
        <Route path="/example" component={Example} />
        <Route path="/home" component={Home} />
    </Router>,
  document.getElementById('root')
);
