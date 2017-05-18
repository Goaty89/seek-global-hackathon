import React, {Component} from 'react';
import './SideBarPicture.css';

export default class SideBarPicture extends Component {
    render () {
        return (
          <img
              className='sidebarpic'
              alt='thumb'
              src='/images/jobstreet/sidebar.jpg'
          />
        );
    }
}
