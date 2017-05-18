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
        params: PropTypes.object
    };

    render () {
        let type = this.props.params.type.toLowerCase();
        return (
          <div>
              <Header/>
              <Container className='profileWithNudgeContainer'>
                  <div className='leftContainer'>
                    <FacePicture/>
                    <Nudge/>
                    {type==='nudge' ? <BodyPicture/> : null}
                    {type==='update' ? <BodyPictureWithResult/> : null}
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
