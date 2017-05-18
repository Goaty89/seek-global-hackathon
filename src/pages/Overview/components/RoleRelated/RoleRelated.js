import React, {Component} from 'react';

import CardWithTitle from '../../../../components/CardTitle/CardTitle';
import Card from '../../../../components/Card/Card';
import Title from './components/Title';
import Paragraph from '../Aside/Paragraph/Paragraph';

export default class RoleRelated extends Component {
    render() {
        return (
            <div>
                <CardWithTitle
                    title="Professional Advice"
                    subtitle="Are you in the right career for your personality?"
                    extraTopMargin>
                </CardWithTitle>
                <Card className="">
                    <Title fitness="79% fit">
                        IT Executive
                    </Title>
                    <Paragraph>Job Duties: Installation/configuration /operation and maintenance of
                        systems hardware and software infrastructure. Creating user accounts.
                        Network Administration / maintenance. Software testing. Requirement:
                        Degree in IT. Experience in Window</Paragraph>
                </Card>
                <Card className="extraSmallTopMargin">
                    <Title fitness="90% fit">
                        Graphic Designer
                    </Title>
                    <Paragraph>Job Scope: ​Develop innovative concepts for print, outdoor advertisements,
                        video storyboard. Create engaging motion graphics, GIF for web and
                        mobile devices. Have a good eye for details and familiar with production
                        and prepress processes. Requirements: Candidate must possess at least.</Paragraph>
                </Card>
                <Card className="extraSmallTopMargin">
                    <Title fitness="90% fit">
                        Product Designer
                    </Title>
                    <Paragraph>Responsibilities: Responsible for conceptualization and development of
                        sports products. Research ideas, gather and analyze current and future
                        trends. Work closely with relevant departments in developing new design
                        collections. Deliver high fidelity schematics, workflows and design
                        deliverables</Paragraph>
                </Card>
            </div>
        );
    }
}