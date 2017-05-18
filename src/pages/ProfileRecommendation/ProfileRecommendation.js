import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import Sidebar from './components/Sidebar/Sidebar';
import PersonalityResult from '../Overview/components/PersonalityResult/PersonalityResult';

import './ProfileRecommendation.css';

export default class ProfileRecommendation extends Component {
    render () {
        return (
            <div>
                <Header/>
                <Container className='profileRecommendation'>
                    <div className='profileAside'>
                        <Sidebar />
                    </div>

                    <div style={{paddingTop: '3px'}}>
                        <PersonalityResult />
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}
