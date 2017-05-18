import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FacePicture from '../../components/FacePicture/FacePicture';
import BodyPicture from '../../components/BodyPicture/BodyPicture';
import SideBarPicture from '../../components/SideBarPicture/SideBarPicture';
import Nudge from '../../components/Nudge/Nudge';

import './ProfileWithNudge.css';

export default class ProfileWithNudge extends Component {
    render () {
        return (
          <div>
              <Header/>
              <Container className='profileWithNudgeContainer'>
                  <div className='leftContainer'>
                    <FacePicture/>
                    <Nudge/>
                    <BodyPicture/>
                  </div>

                  <div className='rightContainer'>
                    <SideBarPicture/>
                  </div>
              </Container>
              <Footer/>
          </div>
        );
    }
}
