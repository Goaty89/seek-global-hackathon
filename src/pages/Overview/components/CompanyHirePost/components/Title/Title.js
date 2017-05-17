import React, {Component} from 'react';

export default class Title extends Component {
    render() {
        const {children, subTitle} = this.props;

        return (
            <div>
                <h2 style={{padding: '0px'}}>{children}</h2>
                <h3 style={{'padding-bottom': '9px'}}>{subTitle}</h3>
            </div>
        );
    }
}