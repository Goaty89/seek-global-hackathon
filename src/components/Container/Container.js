import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Container.css';

export default class Container extends Component {
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        verticalSpacing: PropTypes.bool
    };

    static defaultProps = {
        className: '',
        verticalSpacing: true
    };

    render () {
        const {children, className} = this.props;

        return (
          <div className={`container ${className} ${this.props.verticalSpacing ? 'verticalSpacing' : ''}`}>
              {children}
          </div>
        );
    }
}
