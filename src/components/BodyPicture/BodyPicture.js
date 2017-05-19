import React, {Component} from 'react';
import './BodyPicture.css';

export default class BodyPicture extends Component {
    render () {
        return (
          <img
              className='bodypic'
              alt=''
              src={require('../../static/images/jobstreet/body.jpg')}
          />
        );
    }
}
