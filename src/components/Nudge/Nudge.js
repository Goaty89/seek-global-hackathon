import React, {Component} from 'react';
import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import { Link } from 'react-router';

import './Nudge.css';

export default class Nudge extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
          <div className='nudge' ref={this.props.inputRef} >
              <Card closeButton>
                <div className='logoContainer'>
                    <Logo className='extra-small-icon'/>
                </div>
                <div className='nudgeContent'>
                    <div className='nudgeTitle'>Wanna know your personality skill?</div>
                    <div className='nudgeTitle'>Leading you to the more success future</div>
                    <div className='btnWrapper'>
                        <Link to='home' className='btn btnFillUp'>Fill up for free now</Link>
                    </div>
                </div>
              </Card>
          </div>
        );
    }
}
