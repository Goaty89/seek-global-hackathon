import React, {Component} from 'react';
import Container from '../../components/Container/Container';
import WarningBanner from '../../components/WarningBanner/WarningBanner';
import Result from '../../components/Result/Result';
import './Preview.css';

export default class Preview extends Component {
    getMockPreviewResult() {
        return [{
          leftTitle: 'Cool, Reserved, Impresonal, Detached, Formal, Allof',
          rightTitle: 'Warm, Outgoing, Kindly, Easy-going, Participating',
          score: 5
        },{
          leftTitle: 'Concrete-thinking',
          rightTitle: 'Astract-thinking',
          score: 10
        },{
          leftTitle: 'Affected by feeling, Emmotionally',
          rightTitle: 'Face Reality',
          score: 1
        },{
          leftTitle: 'Tough-minded, Self-reliant',
          rightTitle: 'Tender-minded, Sensitive',
          score: 0
        },{
          leftTitle: 'Practical, Steady',
          rightTitle: 'Imaginative, Absent-minded',
          score: 0
        }];
    }

    render() {
        return (
          <div>
              <Container>
                  <div className='preview'>
                    <WarningBanner iconName='iconWarning' textContent='This is only a preview. Please click the Continue button to complete the test'/>
                    <Result result={this.getMockPreviewResult()}/>
                  </div>
              </Container>
          </div>
        );
    }
}
