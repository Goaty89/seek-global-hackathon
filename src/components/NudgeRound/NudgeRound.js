import React, {Component} from 'react';
import './NudgeRound.css';

export default class NudgeRound extends Component {
    render() {
        return (
          <div className="background-pinky">
            <div className="middle">
                <div className="mirrorFrame">
                    <div className="mirrorBody" />
                </div>
                <div className="shadow" />
            </div>
          </div>
        );
    }
}