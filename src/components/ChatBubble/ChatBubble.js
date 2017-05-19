import React, {Component} from 'react';

import './ChatBubble.css';

export default class Result extends Component {
    constructor (props) {
        super(props);

        this.state = {
            animation: 'bounceIn'
        };
    }

    render () {
        const parent = this;
        setTimeout(function () {
            parent.setState({animation: 'fadeOut'});
        }, 3000);

        return (
          <div className={`speech-bubble animated ${this.state.animation}`}>
            Good! You have just complete the first question!
          </div>
        );
    }
}
