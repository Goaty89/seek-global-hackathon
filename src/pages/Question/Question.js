import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import QuestionConfirmation from './components/QuestionConfirmation/QuestionConfirmation';
import QuestionIcons from './components/QuestionIcons/QuestionIcons';

import './Question.css';

const icons = [{
    header: 'Strongly Disagree',
    inactive: 'thumb-down-grey',
    active: 'thumb-down-red',
}, {
    inactive: 'a-bit-no-grey',
    active: 'a-bit-no-red'
}, {
    header: 'Neither Agree or Disagree',
    inactive: 'whatever-sign-grey',
    active: 'whatever-sign-yellow'
}, {
    inactive: 'a-bit-yes-grey',
    active: 'a-bit-yes-green'
}, {
    header: 'Strongly Agree',
    inactive: 'thumb-up-grey',
    active: 'thumb-up-green'
}];

const questionSets = {
    1: [
        'I am hard to get to know',
        'I don\'t talk a lot',
        'I believe in one true religion',
        'I am not easily annoyed'
    ],
    2: [
        'I take out time out for others',
        'I know that I am not a special person',
        'I take control of things',
        'I try to forgive and forget'
    ],
    3: [
        'I keep in the background',
        'I can\'t do without the company of others',
        'I trust others',
        'I am not easily frustrated'
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
                        <QuestionIcons icons={icons} qKey={-1}/>
                    </div>
                    <div className='questionSet'>
                        {questions.map((q, qKey) => (
                            <div key={qKey}>
                                <h1>{`Q${qKey + 1}: ${q}`}</h1>
                                <QuestionIcons
                                    icons={icons}
                                    qKey={qKey}
                                    answers={this.state.answers}
                                    onClick={this.clickAnswer}
                                />
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
