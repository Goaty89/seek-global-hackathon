import React, {Component} from 'react';
import Container from '../../components/Container/Container';
import WarningBanner from '../../components/WarningBanner/WarningBanner';
import Result from '../../components/Result/Result';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './Preview.css';

export default class Preview extends Component {
    getMockPreviewResult() {
        return [{
          leftTitle: 'Cool, Reserved, Impresonal, Detached, Formal, Allof',
          rightTitle: 'Warm, Outgoing, Kindly, Easy-going, Participating',
          score: this.getRandomScore()
        },{
          leftTitle: 'Concrete-thinking',
          rightTitle: 'Astract-thinking',
          score: this.getRandomScore()
        },{
          leftTitle: 'Affected by feeling, Emmotionally',
          rightTitle: 'Face Reality',
          score: this.getRandomScore()
        },{
          leftTitle: 'Tough-minded, Self-reliant',
          rightTitle: 'Tender-minded, Sensitive',
          score: this.getRandomScore()
        },{
          leftTitle: 'Practical, Steady',
          rightTitle: 'Imaginative, Absent-minded',
          score: this.getRandomScore()
        }];
    }

    getRandomScore() {
      return Math.floor(Math.random() * 10) + 1;
    }

    render() {
        return (
          <div>
              <Container>
                  <div className='preview'>
                    <WarningBanner iconName='iconWarning' textContent='This is only a preview. Please click the Continue button to complete the test'/>
                    <Result result={this.getMockPreviewResult()}/>

                    <Card className='continueCard'>
                      <Button>Continue</Button>
                    </Card>
                  </div>
              </Container>
          </div>
        );
    }
}
