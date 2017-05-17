import React, {Component} from 'react';
import './CardTitle.css';

export default class CardWithTitle extends Component {
    render() {
        const {extraTopMargin, title='', subtitle=''} =  this.props;

        return (
            <div className={`${extraTopMargin ? 'extraSmallTopMargin' : ''}`}>
                {
                    title ? <div className="card-title padding-width-percentage-5">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div> : null
                }
            </div>
        );
    }
}
