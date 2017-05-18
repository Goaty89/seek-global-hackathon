import React, {Component} from 'react';

import CardTitle from '../../../../components/CardTitle/CardTitle';
import Card from '../../../../components/Card/Card';
import Icons from './components/Icons/Icons';

import './PersonalityResult.css';

export default class PersonalityResult extends Component {
    render() {
        return (
            <div className='main-container'>
                <CardTitle
                    title="Personality Overview"
                    subtitle="Who are you?"
                    extraTopMargin>
                    <Icons className="overview-icon-container"/>
                </CardTitle>
                <Card extraPadding="padding-aside">
                    <h2>Task Management</h2>
                    <p>Your Task Management is in the top 5% of the workforce. You have an extraordinary proficiency for setting goals, monitoring progress, and taking initiative to improve your work.</p>
                    <br />
                    <p>You have an extraordinary ability to work independently, establish and meet challenging deadlines, persevere even when initially unsuccessful, and not settle for “good enough."</p>
                    <br />
                    <p>You excel at learning what is important to get the job done right and avoiding costly mistakes. You are also excellent at understanding new procedures and explaining them to others.</p>
                    <br />
                    <p>You can remain calm, level-headed and operate effectively in the midst of stressful situations and under multiple or conflicting demands.</p>
                    <br />
                    <p>You have an extraordinary ability for maintaining accuracy and attention to detail, reporting and recordkeeping, setting goals and creating plans to accomplish the work, as well as monitoring and controlling resources.</p>
                </Card>
                <Card className="extraSmallTopMargin" extraPadding="padding-aside">
                    <h2>Innovation</h2>
                    <p>Your Innovation is in the top 5% of the workforce. You have an extraordinary proficiency for generating creative ideas, out-of-the-box solutions to problems and entrepreneurship.</p>
                    <br />
                    <p>You excel at anticipating problems and choosing solutions that will avoid trouble before they happen. You are also excellent at making plans that will lead to positive outcomes.</p>
                    <br />
                    <p>You have an extraordinary disposition for working with abstract ideas and developing unconventional solutions.</p>
                    <br />
                    <p>You have a strong disposition for being receptive and flexible to different ideas, perspectives, and changing demands.</p>
                </Card>
                <Card className="extraSmallTopMargin" extraPadding="padding-aside">
                    <h2>Adaptation</h2>
                    <p>Your Adaptation is in the top 5% of the workforce. You have an extraordinary proficiency for adjusting to changes in the workplace while maintaining a positive demeanor.</p>
                    <br />
                    <p>You have an ability to deal positively with obstacles and failures, accept criticism and feedback, and use intuition and experience to complement data.</p>
                    <br />
                    <p>You can remain calm, level-headed and operate effectively in the midst of stressful situations and under multiple or conflicting demands.</p>
                    <br />
                    <p>You have an extraordinary ability to change your approach to best fit the situation, analyze problems and develop new solutions.</p>
                    <br />
                    <p>You have a strong ability to learn and apply new skills, adjust effectively to different and changing environments, and smoothly integrate changes into your work habits.</p>
                </Card>
            </div>
        );
    }
}