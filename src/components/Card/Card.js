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
        const {children, extraTopMargin, className, closeButton} =  this.props;

        return (
          <div>
              {
                 this.state.hideCard ?
                  null :
                  <div className={`background-card ${extraTopMargin ? 'extraTopMargin' : ''} ${className}`}>
                      {closeButton ? <div className='icon-close' onClick={this.dismissCard.bind(this)}>x</div> : null}
                      <div>
                          {children}
                      </div>
                  </div>
              }
          </div>
        );

    }
}
