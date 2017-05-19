import React, {Component} from 'react';

import './ChatBubble.css';

export default class Result extends Component {
    constructor (props) {
        super(props);

        this.state = {
            animation: 'bounceIn'
        };
    }

    getText (questionSet, question) {
        const text = {
            1: {
                1: 'Good start, please continue answer the question',
                2: 'Nice, please do not stop now',
                3: 'This is awesome. Finished this and you can view your first preview!'
            },
            2: {
                0: 'Great to see you again!',
                1: 'This is awesome!',
                2: 'Nice, please do not stop now!',
                3: 'This is awesome. Finished this and you can view your second preview!'
            },
            3: {
                0: '',
                1: 'Cool! Keep going',
                2: 'You are almost complete your test!',
                3: 'Last question and you will get your test result!'
            }
        };

        if (text[questionSet] && text[questionSet][question]) {
            return text[questionSet][question];
        } else {
            return null;
        }
    }

    render () {
        const parent = this;
        const {questionSet, question} = this.props;
        const text = this.getText(questionSet, question);

        setTimeout(function () {
            parent.setState({animation: 'fadeOut'});
        }, 3000);

        return (
          <div className={`speech-bubble animated ${this.state.animation}`}>
            {text || 'Good! Keep Going!' }
          </div>
        );
    }
}
