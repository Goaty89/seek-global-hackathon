import React, {Component} from 'react';

import Logo from '../../components/Logo/Logo';
import Card from '../../components/Card/Card';
import PersonalityResult from './components/PersonalityResult/PersonalityResult';
import EducationAdvice from './components/EducationAdvice/EducationAdvice';
import RoleRelated from './components/RoleRelated/RoleRelated';
import CompanyHirePost from './components/CompanyHirePost/CompanyHirePost';

export default class Overview extends Component {
    render() {
        return (
          <div>
              <Card className="background-yellow">
                  <div className="card-description">
                      <Logo className="extra-small-icon"/>
                      <div className="padding-width-percentage-5">
                          Congratulations you have finished all the question! Below will be your personality profiling result.
                      </div>
                  </div>
              </Card>
              <PersonalityResult />

              <CompanyHirePost />
              <RoleRelated />
              <EducationAdvice />
          </div>
        );
    }
}