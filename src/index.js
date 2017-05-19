import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    hashHistory
} from 'react-router';
import './index.css';

import Home from './pages/Home/Home';
import Example from './pages/Example/Example';
import Overview from './pages/Overview/Overview';
import Question from './pages/Question/Question';
import Preview from './pages/Preview/Preview';
import NudgeRound from './components/NudgeRound/NudgeRound';
import ScrollNudge from './pages/ScrollNudge/ScrollNudge';
import ProfileWithUpdate from './pages/ProfileWithUpdate/ProfileWithUpdate';
import ProfileRecommendation from './pages/ProfileRecommendation/ProfileRecommendation';

ReactDOM.render(
    /* /src/index.js */
    <Router history={hashHistory}>
        <Route path='/' component={ProfileWithUpdate} />
        <Route path='/profile' component={ProfileWithUpdate} />
        <Route path='/example' component={Example} />
        <Route path='/questions/:id' component={Question} />
        <Route path='/home' component={Home} />
        <Route path='/preview/:id' component={Preview} />
        <Route path='/overview' component={Overview} />
        <Route path='/profile/recommendation' component={ProfileRecommendation} />
        <Route path='/example/:type' component={ScrollNudge} />
        <Route path="/mirror" components={NudgeRound} />
    </Router>,
  document.getElementById('root')
);
