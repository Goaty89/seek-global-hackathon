import React, {Component} from 'react';
import './Example.css';
import Container from '../../components/Container/Container';
import { Link } from 'react-router'
import logoURL from '../../static/logo.svg'; // Tell Webpack this JS file uses this image
import Logo from '../../components/Logo/Logo';

export default class QueryExample extends Component {
    render() {
        return (
            <div>
                <img src={logoURL} alt="Logo" />
                <Logo >Logo</Logo>
                <h1 className="testing">Hello Example!</h1>
                <Container>
                    This is container!
                </Container>
                <Container>
                    <Link to="#" >Example link</Link>
                </Container>
            </div>
        )
    }
}