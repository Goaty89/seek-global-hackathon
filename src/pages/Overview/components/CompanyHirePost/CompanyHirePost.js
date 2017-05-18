import React, {Component} from 'react';

import CardWithTitle from '../../../../components/CardTitle/CardTitle';
import Card from '../../../../components/Card/Card';
import Title from './components/Title/Title';
import Logo from '../../../../components/Logo/Logo';
import Paragraph from '../Aside/Paragraph/Paragraph';
import "./CompanyHirePost.css";

export default class CompanyHirePost extends Component {
    render() {
        return (
            <div>
                <CardWithTitle
                    title="Best culture-fit companies"
                    subtitle="Best work culture fit according to your personality"
                    extraTopMargin>
                </CardWithTitle>
                <Card
                    insideCard
                    extraPadding="padding-aside">
                    <Logo customLogo="icon-dmc" />
                    <div className="align-small-logo">
                        <Title subTitle="Senior 3D Designer">
                            DMC
                        </Title>
                        <Paragraph>DMC values excellence is constantly looking for talented and extraordinary people. We are seeking...</Paragraph>
                    </div>
                </Card>
                <Card insideCard className="extraSmallTopMargin" extraPadding="padding-aside">
                    <Logo customLogo="icon-mediagates360" />
                    <div className="align-small-logo">
                        <Title subTitle="Graphic Designer">
                            Mediagates360
                        </Title>
                        <Paragraph>Job Scope: Develop innovative concept for print, outdoor advertisements, video storyboard storyboard. Create...</Paragraph>
                    </div>
                </Card>
                <Card insideCard className="extraSmallTopMargin" extraPadding="padding-aside">
                    <Logo customLogo="icon-maestro" />
                    <div className="align-small-logo">
                        <Title subTitle="IT Executive (Raffles Place)">
                            Maestro
                        </Title>
                        <Paragraph>Job Duties: Installation/Configuration/operation and maintenance of system hardware and software...</Paragraph>
                    </div>
                </Card>
            </div>
        );
    }
}