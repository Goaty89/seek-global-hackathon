import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import QuestionConfirmation from './components/QuestionConfirmation/QuestionConfirmation';
import QuestionIcons from './components/QuestionIcons/QuestionIcons';

import './Question.css';

const questionSets = {
    1: [
        'I dislike loud music',
        'I make insightful remarks',
        'I keep my thoughts to myself',
        'I appreciate art'
    ],
    2: [
        'I value my privacy',
        'I believe in the basic morality of other people',
        'I enjoy listening to new ideas',
        'I enjoy looking at flowers'
    ],
    3: [
        'I don\'t like action movies',
        'I voice out my opinions',
        'I initiate conversations with others',
        'I like discussing about cultural topics'
    ]
};

export default class Question extends Component {
    static propTypes = {
        params: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            answers: [null, null, null, null],
            hovered: null
        };
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.params.id !== this.props.params.id) {
            this.setState({
                answers: [null, null, null, null]
            });
        }
    }

    getQuestion () {
        let questions = questionSets[this.props.params.id] || [];
        for (let qKey of [0, 1, 2, 3]) {
            if (this.state.answers[qKey] === null) {
                return (
                    <div className='questionSet' key={qKey}>
                        <h4 className='header'>{`Q${qKey + 1}: ${questions[qKey]}`}</h4>
                        <QuestionIcons
                            qKey={qKey}
                            hovered={this.state.hovered}
                            onClick={this.clickAnswer}
                            onMouseOver={this.mouseOverAnswer}
                            onMouseOut={this.mouseOutAnswer}
                        />
                    </div>
                );
            }
        }
        return null;
    }

    clickAnswer = (qKey, aKey) => () => {
        setTimeout(() => {
            this.setState({
                answers: this.state.answers.map((a, qIndex) => qIndex === qKey ? aKey : a)
            });
        }, 1000);
    };

    mouseOverAnswer = (aKey) => () => {
        this.setState({
            hovered: aKey
        });
    };

    mouseOutAnswer = () => {
        this.setState({
            hovered: null
        });
    };

    render () {
        let id = parseInt(this.props.params.id, 10);
        let nextLink = id === 3 ? '/overview' : '/questions/' + (id + 1);
        return (
            <div id='questionsContainer'>
                <Header/>
                <Container>
                    <div className='helper'>
                        <QuestionIcons qKey={-1} showHeaders/>
                    </div>
                    {!this.state.answers.filter(a => a === null).length ? (
                        <QuestionConfirmation id={id} nextLink={nextLink}/>
                    ) : (
                        <div className='questionSets'>
                            {this.getQuestion()}
                        </div>
                    )}
                </Container>
                <Footer/>
            </div>
        );
    }
}
