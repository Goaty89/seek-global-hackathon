import React, {Component} from 'react';
import './Home.css';

import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import Card from '../../components/Card/Card';
import Button from  '../../components/Button/Button';

export default class Home extends Component {
    render() {
        return (
            <div className="background">
                <Container>
                    <Card className="background-yellow">
                        Hello there!
                        Do take some time to complete the following personality test and find out what you are like as a person and your work-related personality! This will greatly enhance your profile to showcase to potential employees too!
                        In this test, there are no right or wrong answers. Simply answer in a way that is most like you.
                    </Card>
                    <Card extraTopMargin>
                        <Logo className="small-icon" />
                        <p>16PF personality test is used by employers for employment, promotion, coaching, and career development. Completing this test will greatly increase your chances of winning that dream job!</p>
                    </Card>
                    <Card className="background-light-grey card-flex-center" extraTopMargin>
                        <Button url="#">Let's start</Button>
                    </Card>
                </Container>
            </div>
        );
    }
}