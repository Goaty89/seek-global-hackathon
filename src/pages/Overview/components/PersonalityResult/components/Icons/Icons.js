import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Icons.css';

export default class Icons extends Component {
    static propTypes = {
        className: PropTypes.string
    };

    render () {
        const {className} = this.props;
        return (
            <div className={`icon-container ${className}`}>
                <a href='https://twitter.com/?lang=en' target='_blank'><i className='icon-social twitter extraRightPadding' /></a>
                <a href='https://wwww.facebook.com' target='_blank'><i className='icon-social facebook' /></a>
            </div>
        );
    }
}
