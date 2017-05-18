import React, {Component} from 'react';
import './NudgeRound.css';

export default class NudgeRound extends Component {
    render() {
        return (
          <div className="background-pinky">
            <div className="mirrorFrame">
                <div className="mirrorBody" />
            </div>

            <div className="middle">
                <div className="mirrorFrame">
                    <div className="mirrorBody" />
                </div>
            </div>

            <div className="end">
                <div className="mirrorFrame">
                    <div className="mirrorBody" />
                </div>
            </div>
          </div>
        );
    }
}