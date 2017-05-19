import React, {Component} from 'react';
import './SideBarPicture.css';

export default class SideBarPicture extends Component {
    render () {
        return (
          <img
              className='sidebarpic'
              alt='thumb'
              src={require('../../static/images/jobstreet/sidebar.jpg')}
          />
        );
    }
}
