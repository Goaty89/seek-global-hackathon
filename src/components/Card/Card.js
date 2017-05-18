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
        const {children, extraTopMargin, insideCard, className, closeButton, extraPadding} =  this.props;

        return (
            <div>
                {
                    this.state.hideCard ?
                        null :
                        <div className={`background-card ${extraTopMargin ? 'extraTopMargin' : ''} ${className} ${extraPadding || 'padding-width-percentage-5'}`}>
                            {closeButton ? <div className='icon-close' onClick={this.dismissCard.bind(this)}>x</div> : null}
                            <div className={insideCard ? 'insideCard' : ''}>
                                {children}
                            </div>
                        </div>
                }
            </div>
        );

    }
}

