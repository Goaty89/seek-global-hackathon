import React, {Component} from 'react';

import CardWithTitle from '../../../../components/CardTitle/CardTitle';
import Card from '../../../../components/Card/Card';
import Logo from '../../../../components/Logo/Logo';
import "./EducationAdvice.css";
import Paragraph from '../Aside/Paragraph/Paragraph';

export default class EducationAdvice extends Component {
    render() {
        return (
            <div>
                <CardWithTitle
                    title="Education Advice"
                    subtitle="Are you thinking of switching or advancing your career?"
                    extraTopMargin>
                </CardWithTitle>
                <Card insideCard className="icon-position-bottom" extraPadding="padding-aside">
                    <Logo customLogo="icon-coders" />
                    <div className="align-small-logo">
                        <h2 className="color-light-blue">Learn Web Design</h2>
                        <Paragraph>Kickstart your career as a freelance web designer with
                            this course by CodersTrust. In this course, you’ll learn
                            the skills needed to design and develop functional,
                            responsive, interactive and industry-oriented websites.
                            You’ll also learn business and technical English as....</Paragraph>
                    </div>
                </Card>
                <Card insideCard className="extraSmallTopMargin icon-position-bottom" extraPadding="padding-aside">
                    <Logo customLogo="icon-ethical" />
                    <div className="align-small-logo">
                        <h2 className="color-light-blue">Ethical Hacker</h2>
                        <Paragraph>With this online Certified Ethical Hacker course, you’ll
                            learn how to deploy the same tools as malicious
                            hackers to assess weaknesses in network
                            infrastructures and secure systems.</Paragraph>
                    </div>
                </Card>
                <Card insideCard className="extraSmallTopMargin icon-position-bottom" extraPadding="padding-aside">
                    <Logo customLogo="icon-digital" />
                    <div className="align-small-logo">
                        <h2 className="color-light-blue">Digital Marketing</h2>
                        <Paragraph>This program provides an in-depth and
                            comprehensive introduction to the core essentials of
                            digital marketing. Validated by the Digital Marketing
                            Institute's Industry Advisory Council, the learning
                            content is informed and designed by experts and ....</Paragraph>
                    </div>
                </Card>
            </div>
        );
    }
}