import React, {Component} from 'react';

export default class Paragraph extends Component {
    render() {
        const {children}=this.props;

        return(
            <p className="aside-paragraph">
                {children}
            </p>
        );
    }
}