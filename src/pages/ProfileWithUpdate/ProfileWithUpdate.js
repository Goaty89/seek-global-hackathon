import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FacePicture from '../../components/FacePicture/FacePicture';
import BodyPicture from '../../components/BodyPicture/BodyPicture';
import BodyPictureWithResult from '../../components/BodyPictureWithResult/BodyPictureWithResult';
import SideBarPicture from '../../components/SideBarPicture/SideBarPicture';
import Nudge from '../../components/Nudge/Nudge';

import './ProfileWithUpdate.css';

export default class ProfileWithUpdate extends Component {
    static propTypes = {
        route: PropTypes.object
    };

    render () {
        let type = this.props.route.path;
        return (
          <div>
              <Header/>
              <Container className='profileWithNudgeContainer'>
                  <div className='leftContainer'>
                    <FacePicture/>
                    {type!=='/profile' ? <Nudge/> :  null }
                    {type==='/profile' ? <BodyPictureWithResult/> : <BodyPicture/>}
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
