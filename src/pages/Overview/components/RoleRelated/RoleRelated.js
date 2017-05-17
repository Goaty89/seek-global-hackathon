import React, {Component} from 'react';

import CardWithTitle from '../../../../components/CardTitle/CardTitle';
import Card from '../../../../components/Card/Card';
import Title from './components/Title';

export default class RoleRelated extends Component {
    render() {
        return (
            <div>
                <CardWithTitle
                    title="Professional Advice"
                    subtitle="Are you in the right career for your personality?">
                </CardWithTitle>
                <Card className="">
                    <Title fitness="79% fit">
                        IT Executive
                    </Title>
                    <p>You and me</p>
                </Card>
                <Card className="extraSmallTopMargin">
                    <Title fitness="90% fit">
                        Mediagates360
                    </Title>
                    <p>Job Scope: Develop</p>
                </Card>
            </div>
        );
    }
}