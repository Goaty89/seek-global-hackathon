import React, {Component} from 'react';
import './ScoreCardResult.css';

export default class ScoreCardResult extends Component {

    renderScoreCard(parent, result) {
        const scoreCard = result.map(function (item, index) {
          return (
            <div className='scoreCard' key={index}>
                <div className='titleBlock'>{item.leftTitle}</div>
                {parent.renderScoreItem(item.score)}
                <div className='titleBlock'>{item.rightTitle}</div>
            </div>
          );
        });

        return scoreCard;
    }

    renderScoreItem(score) {
        const scoreItems = [];

        for(let i=1; i<=10; ++i) {
          scoreItems.push(<div className='scoreItem' key={i}>
            {(i===score) ? <span className='scored'/> : null}
          </div>);
        }

        return scoreItems;
    }

    render() {
        return (
          <div>
            {this.renderScoreCard(this, this.props.result)}
          </div>
        );
    }
}
