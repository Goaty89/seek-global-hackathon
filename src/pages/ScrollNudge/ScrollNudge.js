import React, {Component} from 'react';
import Nudge from '../../components/Nudge/Nudge';

export default class ScrollNudge extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandle.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandle.bind(this));
    }

    scrollHandle(event) {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkOn = 300;
        const header = document.querySelector("header");

        console.log('when scroll distanceY: ', distanceY, this.inputElement);
    }

    render() {
        const {params} = this.props;
        console.log('params, ',params);
        return (
            <article>
                <header>Hello header!</header>
                <Nudge inputRef={el => this.inputElement = el}/>
                <div style={{height: '200px', background: '#8edfec'}}>
                    lorem ipsum
                </div>
                <div style={{height: '200px'}}>
                    lorem ipsum 2
                </div>
                <div style={{height: '200px', background: '#8edfed'}}>
                    lorem ipsum
                </div>
                <div style={{height: '200px'}}>
                    lorem ipsum 2
                </div>
                <div style={{height: '200px', background: '#8edfee'}}>
                    lorem ipsum
                </div>
                <div style={{height: '200px'}}>
                    lorem ipsum 2
                </div>
                <div style={{height: '200px', background: '#8edfef'}}>
                    lorem ipsum
                </div>
                <div style={{height: '200px'}}>
                    lorem ipsum 2
                </div>
            </article>
        );
    }
}