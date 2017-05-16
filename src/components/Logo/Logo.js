import React, {Component} from 'react';
import './Logo.css';

export default class Logo extends Component {
    render() {
        return (
            <div>
                <i className="logo" /> <span>My Logo</span>
            </div>
        );
    }
}