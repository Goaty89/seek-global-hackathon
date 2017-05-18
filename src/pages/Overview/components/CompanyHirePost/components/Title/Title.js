import React, {Component} from 'react';

export default class Title extends Component {
    render() {
        const {children, subTitle} = this.props;

        return (
            <div className="color-light-blue">
                <h2 style={{padding: '0px'}}>{children}</h2>
                <h3 style={{paddingBottom: '9px'}}>{subTitle}</h3>
            </div>
        );
    }
}