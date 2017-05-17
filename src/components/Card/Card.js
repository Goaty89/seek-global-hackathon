import React, {Component} from 'react';

import './Card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
          hideCard: false
        }
    }

    dismissCard() {
      this.setState({
            hideCard : true
      });
    }

    render() {
        const {children} = this.props;

        return (
          <div>
              {
                 this.state.hideCard ?
                  null :
                  <div className='card'>
                      <div className='icon-close' onClick={this.dismissCard.bind(this)}>x</div>
                      <div>{children}</div>
                  </div>
              }
          </div>
        );

    }
}
