import React, {Component} from 'react';
import './NudgeRound.css';

export default class NudgeRound extends Component {
    render() {
        return (
          <div className="background-pinky">
            <div className="mirrorFrame">
                <div className="mirrorbody" />
                <div className="mirrorReflect" />
            </div>
          </div>
        );
    }
}