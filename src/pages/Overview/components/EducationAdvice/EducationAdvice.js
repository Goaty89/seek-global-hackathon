import React, {Component} from 'react';

import CardWithTitle from '../../../../components/CardTitle/CardTitle';
import Card from '../../../../components/Card/Card';

export default class EducationAdvice extends Component {
    render() {
        return (
            <div>
                <CardWithTitle
                    title="Education Advice"
                    subtitle="Are you thinking of switching or advancing your career?">
                </CardWithTitle>
                <Card className="">
                    <h2>Learn Web Design</h2>
                    <p>You and me</p>
                </Card>
                <Card className="extraSmallTopMargin">
                    <h2>Adaptation</h2>
                    <p>You Adaptation</p>
                </Card>
            </div>
        );
    }
}