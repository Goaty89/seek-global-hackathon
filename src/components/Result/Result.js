import React, {Component} from 'react';
import Card from '../../components/Card/Card';
import ScoreCardTitle from './ScoreCardTitle/ScoreCardTitle';
import ScoreCardResult from './ScoreCardResult/ScoreCardResult';

import './Result.css';

export default class Result extends Component {
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
        const previewResult = this.getMockPreviewResult();

        return (
          <div className='result'>
            <Card>
              <ScoreCardTitle/>
              <ScoreCardResult result={previewResult}/>
            </Card>
          </div>
        );
    }
}
