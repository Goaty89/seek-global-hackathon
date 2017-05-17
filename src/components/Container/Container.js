import React, {Component} from 'react';
import "./Container.css";

export default class Container extends Component {
    render() {
        const {children, className} = this.props;

        return (
          <div className={`container ${className}`}>
              {children}
          </div>
        );
    }
}