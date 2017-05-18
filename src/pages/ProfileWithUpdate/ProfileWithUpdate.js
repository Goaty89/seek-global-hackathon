import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FacePicture from '../../components/FacePicture/FacePicture';
import BodyPictureWithResult from '../../components/BodyPictureWithResult/BodyPictureWithResult';
import SideBarPicture from '../../components/SideBarPicture/SideBarPicture';
import Nudge from '../../components/Nudge/Nudge';

import './ProfileWithUpdate.css';

export default class ProfileWithUpdate extends Component {
    render () {
        return (
          <div>
              <Header/>
              <Container className='profileWithNudgeContainer'>
                  <div className='leftContainer'>
                    <FacePicture/>
                    <Nudge/>
                    <BodyPictureWithResult/>
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
