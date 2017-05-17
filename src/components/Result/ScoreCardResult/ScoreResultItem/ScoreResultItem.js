import React, {Component} from 'react';
import './ScoreResultItem.css';

export default class ScoreCardResult extends Component {
    renderScoreItem(score) {
        const scoreItems = [];

        for(let i=1; i<=10; ++i) {
          scoreItems.push(<div className='scoreItem'>
            {(i===score) ? <span className='scored'/> : null}
          </div>);
        }

        return scoreItems;
    }

    render() {
        return (
          <div>
              {this.renderScoreItem(this.props.score)}
          </div>
        );
    }
}
