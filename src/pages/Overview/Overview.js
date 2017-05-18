import React, {Component} from 'react';

import Logo from '../../components/Logo/Logo';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PersonalityResult from './components/PersonalityResult/PersonalityResult';
import EducationAdvice from './components/EducationAdvice/EducationAdvice';
import RoleRelated from './components/RoleRelated/RoleRelated';
import CompanyHirePost from './components/CompanyHirePost/CompanyHirePost';
import {Link} from 'react-router';

import "./Overview.css";

export default class Overview extends Component {
    render() {
        return (
            <div>
                <Link to="/profile">
                <Header />
                </Link>
                <Container>
                  <Card className="background-yellow">
                      <div className="card-description">
                          <Logo className="extra-small-icon"/>
                          <div className="padding-width-percentage-5">
                              Congratulations you have finished all the question! Below will be your personality profiling result.
                          </div>
                      </div>
                  </Card>
                  <div className="overview-main-container">
                      <PersonalityResult className='main-container' extraTopMargin/>
                      <div className="aside-width">
                          <CompanyHirePost />
                          <RoleRelated />
                          <EducationAdvice />
                      </div>
                  </div>
                </Container>
                <Footer />
            </div>
        );
    }
}