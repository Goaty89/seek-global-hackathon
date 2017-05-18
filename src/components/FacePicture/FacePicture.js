import React, {Component} from 'react';
import './FacePicture.css';

export default class FacePicture extends Component {
    render () {
        return (
          <img
              className='facepic'
              src='/images/jobstreet/facepic.jpg'
          />
        );
    }
}
