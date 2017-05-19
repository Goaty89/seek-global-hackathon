import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import './FacePicture.css';

export default class FacePicture extends Component {
    render () {
        return (
            <Link to="/profile/recommendation">
              <img
                  className='facepic'
                  src='../../static/images/jobstreet/facepic.jpg'
                  alt=''
              />
            </Link>
        );
    }
}
