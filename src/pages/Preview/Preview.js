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
            leftIcon: 'icon_q5_RestrainedSerious',
            rightTitle: 'Enthusiastic, Impulsive, Heedless, Expressive',
            rightIcon: 'icon_q5_impulsive',
            score: id > 1 ? this.getRandomScore() : 0
        }, {
            leftTitle: 'Expedient, Disregards Rules',
            leftIcon: 'icon_q6_DisregardRule',
            rightTitle: 'Conscientious, Persistent',
            rightIcon: 'icon_q6_persistent',
            score: id > 1 ? this.getRandomScore() : 0
        }, {
            leftTitle: 'Shy, Threat-sensitive, Timid',
            leftIcon: 'icon_q7_timid',
            rightTitle: 'Bold, Venturesome, Uninhibited',
            rightIcon: 'icon_q7_bold',
            score: id > 1 ? this.getRandomScore() : 0
        }];
    }

    getThirdMock (id) {
        return [{
            leftTitle: 'Tough-minded, Self-reliant',
            leftIcon: 'icon_q8_toughminded',
            rightTitle: 'Tender-minded, Sensitive',
            rightIcon: 'icon_q8_sensitive',
            score: id > 2 ? this.getRandomScore() : 0
        }, {
            leftTitle: 'Trusting, Accepting Conditions',
            leftIcon: 'icon_q9_trusting',
            rightTitle: 'Suspicious, Hard to Fool',
            rightIcon: 'icon_q9_skeptical',
            score: id > 2 ? this.getRandomScore() : 0
        }, {
            leftTitle: 'Practical, Steady',
            leftIcon: 'icon_q10_practical',
            rightTitle: 'Imaginative, Absent-minded',
            rightIcon: 'icon_q10_imaginative',
            score: id > 2 ? this.getRandomScore() : 0
        }];
    }

    getMockPreviewResult (id) {
        return [{
            leftTitle: 'Cool, Reserved, Impresonal, Detached, Formal, Allof',
            leftIcon: 'icon_q1_cool',
            rightTitle: 'Warm, Outgoing, Kindly, Easy-going, Participating',
            rightIcon: 'icon_q1_warmth',
            score: this.getRandomScore()
        }, {
            leftTitle: 'Concrete-thinking',
            leftIcon: 'icon_q2_concrete',
            rightTitle: 'Astract-thinking',
            rightIcon: 'icon_q2_abstract',
            score: this.getRandomScore()
        }, {
            leftTitle: 'Affected by feeling, Emmotionally',
            leftIcon: 'icon_q3_emotional',
            rightTitle: 'Face Reality',
            rightIcon: 'icon_q3_facereality',
            score: this.getRandomScore()
        }, {
            leftTitle: 'Submissive, Humble, Mild',
            leftIcon: 'icon_q4_submissive',
            rightTitle: 'Dominat, Assertive, Aggressive',
            rightIcon: 'icon_q4_dominant',
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
