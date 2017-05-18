import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/Container';
import WarningBanner from '../../components/WarningBanner/WarningBanner';
import Result from '../../components/Result/Result';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './Preview.css';

export default class Preview extends Component {
    static propTypes = {
        params: PropTypes.object
    };

    getSecondMock (id) {
        return [{
            leftTitle: 'Sober, Restrained, Prudent',
            rightTitle: 'Enthusiastic, Impulsive, Heedless, Expressive',
            score: id > 1 ? this.getRandomScore() : 0
        }, {
            leftTitle: 'Expedient, Disregards Rules',
            rightTitle: 'Conscientious, Persistent',
            score: id > 1 ? this.getRandomScore() : 0
        }, {
            leftTitle: 'Shy, Threat-sensitive, Timid',
            rightTitle: 'Bold, Venturesome, Uninhibited',
            score: id > 1 ? this.getRandomScore() : 0
        }];
    }

    getThirdMock (id) {
        return [{
            leftTitle: 'Tough-minded, Self-reliant',
            rightTitle: 'Tender-minded, Sensitive',
            score: id > 2 ? this.getRandomScore() : 0
        }, {
            leftTitle: 'Trusting, Accepting Conditions',
            rightTitle: 'Suspicious, Hard to Fool',
            score: id > 2 ? this.getRandomScore() : 0
        }, {
            leftTitle: 'Practical, Steady',
            rightTitle: 'Imaginative, Absent-minded',
            score: id > 2 ? this.getRandomScore() : 0
        }];
    }

    getMockPreviewResult (id) {
        return [{
            leftTitle: 'Cool, Reserved, Impresonal, Detached, Formal, Allof',
            rightTitle: 'Warm, Outgoing, Kindly, Easy-going, Participating',
            score: this.getRandomScore()
        }, {
            leftTitle: 'Concrete-thinking',
            rightTitle: 'Astract-thinking',
            score: this.getRandomScore()
        }, {
            leftTitle: 'Affected by feeling, Emmotionally',
            rightTitle: 'Face Reality',
            score: this.getRandomScore()
        }, {
            leftTitle: 'Submissive, Humble, Mild',
            rightTitle: 'Dominat, Assertive, Aggressive',
            score: this.getRandomScore()
        }, ...this.getSecondMock(id), ...this.getThirdMock(id)];
    }

    getRandomScore () {
        return Math.floor(Math.random() * 10) + 1;
    }

    render () {
        let id = parseInt(this.props.params.id, 10);
        let nextLink = id === 3 ? '/overview' : '/questions/' + (id + 1);
        return (
            <div>
                <Container>
                    <div className='preview'>
                        <WarningBanner iconName='iconWarning' textContent='This is only a preview. Please click the Continue button to complete the test'/>
                        <Result result={this.getMockPreviewResult(id)}/>

                        <Card className='continueCard'>
                            <Button url={nextLink}>
                                Continue
                            </Button>
                        </Card>
                    </div>
                </Container>
            </div>
        );
    }
}
