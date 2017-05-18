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

    clickAnswer = (qKey, aKey) => () => {
        this.setState({
            answers: this.state.answers.map((a, qIndex) => qIndex === qKey ? aKey : a)
        });
    };

    render () {
        let id = parseInt(this.props.params.id, 10);
        let nextLink = id === 3 ? '/overview' : '/questions/' + (id + 1);
        let questions = questionSets[this.props.params.id] || [];
        return (
            <div id='questionsContainer'>
                <Header/>
                <Container>
                    <div className='helper'>
                        <QuestionIcons qKey={-1} showHeaders/>
                    </div>
                    <div className='questionSets'>
                        {questions.map((q, qKey) => (
                            <div className='questionSet' key={qKey}>
                                <h1>{`Q${qKey + 1}: ${q}`}</h1>
                                <QuestionIcons qKey={qKey} answers={this.state.answers} onClick={this.clickAnswer}/>
                            </div>
                        ))}
                    </div>
                    {!this.state.answers.filter(a => a === null).length ? (
                        <QuestionConfirmation id={id} nextLink={nextLink}/>
                    ) : null}
                </Container>
                <Footer/>
            </div>
        );
    }
}
