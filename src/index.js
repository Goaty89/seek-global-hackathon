import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    browserHistory
} from 'react-router';
import Root from './pages/App/App';
import './index.css';
import Example from './pages/Example/Example';
import Question from './pages/Question/Question';

ReactDOM.render(
    /* /src/index.js */
    <Router history={browserHistory}>
        <Route path="/" component={Root} />
        <Route path="/example" component={Example} />
        <Route path="/questions/:id" component={Question} />
    </Router>,
  document.getElementById('root')
);
