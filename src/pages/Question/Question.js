import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import QuestionConfirmation from './components/QuestionConfirmation/QuestionConfirmation';
import QuestionIcons from './components/QuestionIcons/QuestionIcons';
import ChatBubble from '../../components/ChatBubble/ChatBubble';

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
            answers: [null, null, null, null]
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

                          <div className='questionTitle'>
                            <h4 className='header'>{`Q${qKey + 1}: ${questions[qKey]}`}</h4>
                            <div className='bubbleContainer'>
                              {this.state.answers[qKey-1] ? <ChatBubble/> : null}
                            </div>
                          </div>
                        <QuestionIcons qKey={qKey} answers={this.state.answers} onClick={this.clickAnswer}/>
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

    render () {
        let id = parseInt(this.props.params.id, 10);
        let nextLink = id === 3 ? '/overview' : '/questions/' + (id + 1);
        return (
            <div id='questionsContainer' className="wrapper">
                <Header/>
                <Container className="content">
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
