import React, {Component} from 'react';

import CardTitle from '../../../../components/CardTitle/CardTitle';
import Card from '../../../../components/Card/Card';

export default class PersonalityResult extends Component {
    render() {
        return (
            <div>
                <CardTitle
                    title="Personality Overview"
                    subtitle="Who are you?">
                </CardTitle>
                <Card>
                    <h2>Innovation</h2>
                    <p>You and me</p>
                </Card>
                <Card  className="extraSmallTopMargin">
                    <h2>Adaptation</h2>
                    <p>You Adaptation</p>
                </Card>
            </div>
        );
    }
}