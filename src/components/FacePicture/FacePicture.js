import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import './FacePicture.css';

export default class FacePicture extends Component {
    gotoUpdateProfile () {
        browserHistory.push('/profile/recommendation');
    }

    render () {
        return (
          <img
              className='facepic'
              src='/images/jobstreet/facepic.jpg'
              alt=''
              onClick={this.gotoUpdateProfile}
          />
        );
    }
}
