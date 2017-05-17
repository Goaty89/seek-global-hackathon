import React, {Component} from 'react';
<<<<<<< HEAD
import './Card.css';

export default class Card extends Component {
    render() {
        const {children, extraTopMargin, className} =  this.props;

        return(
            <div className={`background-card ${extraTopMargin ? 'extraTopMargin' : ''} ${className}`}>
                {children}
            </div>
        );
    }
}
=======

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
        const {children, extraTopMargin, className} =  this.props;

        return (
          <div>
              {
                 this.state.hideCard ?
                  null :
                  <div className={`background-card ${extraTopMargin ? 'extraTopMargin' : ''} ${className}`}>
                      <div className='icon-close' onClick={this.dismissCard.bind(this)}>x</div>
                      <div>
                          {children}
                      </div>
                  </div>
              }
          </div>
        );

    }
}
>>>>>>> 8a85f8a6400a984bf5ab810671d4d36f074db37a
