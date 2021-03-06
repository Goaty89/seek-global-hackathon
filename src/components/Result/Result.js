import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import ScoreCardTitle from './ScoreCardTitle/ScoreCardTitle';
import ScoreCardResult from './ScoreCardResult/ScoreCardResult';

import './Result.css';

export default class Result extends Component {
    static propTypes = {
        result: PropTypes.array.isRequired
    };

    render () {
        return (
          <div className='result'>
            <Card>
              <ScoreCardTitle/>
              <ScoreCardResult result={this.props.result}/>
            </Card>
          </div>
        );
    }
}
