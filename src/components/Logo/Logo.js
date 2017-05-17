import React, {Component} from 'react';
import './Logo.css';

export default class Logo extends Component {
    render() {
        const {className} = this.props;

        return (
            <i className={`logo ${className}`} />
        );
    }
}