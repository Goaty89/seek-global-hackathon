import React, {Component} from 'react';

import Card from '../Card/Card';
import './WarningBanner.css';

export default class WarningBanner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {iconName, textContent} =  this.props;

        return (
          <Card className='warningCard'>
              <div className='warningIconContainer twoBox'>
                  <i className={iconName} />
              </div>
              <div className='warningCardContent twoBox'>
                  <span className='textContent'>{textContent}</span>
              </div>
          </Card>
        );

    }
}
