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
import Overview from './pages/Overview/Overview';
import Question from './pages/Question/Question';
import Preview from './pages/Preview/Preview';
import ProfileWithNudge from './pages/ProfileWithNudge/ProfileWithNudge';
import ProfileRecommendation from './pages/ProfileRecommendation/ProfileRecommendation';

ReactDOM.render(
    /* /src/index.js */
    <Router history={browserHistory}>
        <Route path='/' component={Root} />
        <Route path='/example' component={Example} />
        <Route path='/questions/:id' component={Question} />
        <Route path='/home' component={Home} />
        <Route path='/preview/:id' component={Preview} />
        <Route path='/overview' component={Overview} />
        <Route path='/profileWithNudge' component={ProfileWithNudge} />
        <Route path='/profile/recommendation' component={ProfileRecommendation} />
    </Router>,
  document.getElementById('root')
);
