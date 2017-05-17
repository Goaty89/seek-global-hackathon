import React, {Component} from 'react';
import './ScoreCardTitle.css';

export default class ScoreCardTitle extends Component {

    renderScoreLabel() {
        const scoreLabel = [];

        for (let i=0; i<10; ++i) {
            scoreLabel.push(<div className='scoreLabel' key={i}>{i+1}</div>);
        }

        return scoreLabel;
    }

    render() {
        return (
          <div className='scoreCardTitle'>
              {this.renderScoreLabel()}
          </div>
        );
    }
}
