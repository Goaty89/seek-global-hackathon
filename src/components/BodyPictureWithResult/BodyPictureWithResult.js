import React, {Component} from 'react';
import './BodyPictureWithResult.css';

export default class BodyPictureWithResult extends Component {
    render () {
        return (
          <img
              className='bodypicwithresult'
              alt=''
              src={require('../../static/images/jobstreet/after-body.jpg')}
          />
        );
    }
}
