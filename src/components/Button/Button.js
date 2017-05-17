import React, {Component} from 'react';
import "./Button.css";
import {Link} from 'react-router';

export default class Button extends Component {
    render() {
        const {url, children}=this.props;

        return(
            <Link to={url} className="button background-yellow-sharp" >
                {children || 'Submit'}
            </Link>
        );
    }
}