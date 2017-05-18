import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ScoreCardResult.css';

export default class ScoreCardResult extends Component {
    static propTypes = {
        result: PropTypes.array.isRequired
    };

    renderScoreCard (parent, result) {
        const scoreCard = result.map(function (item, index) {
            return (
              <div className='scoreCard' key={index}>
                  <div className='titleBlock'>
                      <div className='titleBlockIcon'><img src={`/images/icons/questions/${item.leftIcon}.png`} alt=''/></div>
                      <div className='titleBlockText'>{item.leftTitle}</div>
                  </div>
                  {parent.renderScoreItem(item.score)}
                  <div className='titleBlock'>
                      <div className='titleRightBlockText'>{item.rightTitle}</div>
                      <div className='titleRightBlockIcon'><img src={`/images/icons/questions/${item.rightIcon}.png`} alt=''/></div>
                  </div>
              </div>
            );
        });

        return scoreCard;
    }

    renderScoreItem (score) {
        const scoreItems = [];

        for (let i=1; i<=10; ++i) {
            scoreItems.push(<div className='scoreItem' key={i}>
            {(i===score) ? <span className='scored'/> : null}
          </div>);
        }

        return scoreItems;
    }

    render () {
        return (
          <div>
            {this.renderScoreCard(this, this.props.result)}
          </div>
        );
    }
}
