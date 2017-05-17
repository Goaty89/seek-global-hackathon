import React, {Component} from 'react';
import './Card.css';

export default class Card extends Component {
    render() {
        const {children, extraTopMargin, className} =  this.props;

        return(
            <div className={`background-card ${extraTopMargin ? 'extraTopMargin' : ''} ${className}`}>
                {children}
            </div>
        );
    }
}