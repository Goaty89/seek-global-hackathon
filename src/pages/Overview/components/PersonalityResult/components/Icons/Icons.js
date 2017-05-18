import React, {Component} from 'react';
import './Icons.css';
import Link from 'react-router';

export default class Icons extends Component {
    render() {
        const {className} = this.props;
        return (
            <div className={`icon-container ${className}`}>
                <a href="https://twitter.com/?lang=en" target="_blank"><i className="icon-social twitter extraRightPadding" /></a>
                <a href="https://wwww.facebook.com" target="_blank"><i className="icon-social facebook" /></a>
            </div>
        );
    }
}