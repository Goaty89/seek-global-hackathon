import React, {Component} from 'react';

export default class Title extends Component {
    render() {
        const {children, fitness} = this.props;

        return (
            <div>
                <h2 style={{display: 'inline-block'}}>{children}</h2>
                <h2 style={{float: 'right', display: 'inline-block'}}>{fitness}</h2>
            </div>
        );
    }
}