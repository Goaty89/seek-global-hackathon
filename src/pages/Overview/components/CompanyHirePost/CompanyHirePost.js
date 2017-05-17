import React, {Component} from 'react';

import CardWithTitle from '../../../../components/CardTitle/CardTitle';
import Card from '../../../../components/Card/Card';
import Title from './components/Title/Title';
import Logo from '../../../../components/Logo/Logo';
import "CompanyHirePost.css";

export default class CompanyHirePost extends Component {
    render() {
        return (
            <div>
                <CardWithTitle
                    title="Best culture-fit companies"
                    subtitle="Best work culture fit according to your personality">
                </CardWithTitle>
                <Card className="">
                    <Logo customLogo="icon-dmc" />
                    <Title subTitle="Senior 3D Designer">
                        DMC
                    </Title>
                    <p>You and me</p>
                </Card>
                <Card className="extraSmallTopMargin">
                    <Logo customLogo="icon-mediagates360" />
                    <Title subTitle="Graphic Designer">
                        Mediagates360
                    </Title>
                    <p>Job Scope: Develop</p>
                </Card>
                <Card className="extraSmallTopMargin">
                    <Logo customLogo="icon-maestro" />
                    <Title subTitle="IT Executive (Raffles Place)">
                        Maestro
                    </Title>
                    <p>Job Duties: Installation</p>
                </Card>
            </div>
        );
    }
}