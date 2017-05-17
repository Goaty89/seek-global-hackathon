import React, {Component} from 'react';
import './Example.css';
import Container from '../../components/Container/Container';
import { Link } from 'react-router'
import logoURL from '../../static/logo.svg'; // Tell Webpack this JS file uses this image

import Logo from '../../components/Logo/Logo';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Nudge from '../../components/Nudge/Nudge';
import Card from '../../components/Card/Card';
import Home from '../../pages/Home/Home';

export default class QueryExample extends Component {
    render() {
        return (
            <Container>
                <img src={logoURL} alt="Logo" />
                <Logo >Logo</Logo>
                <h1 className="testing">Hello Example!</h1>
                <Card extraTopMargin>
                    This is container!
                </Card>
                <Card extraTopMargin>
                    <Link to="#" >Example link</Link>
                </Card>

                <br />

                <Header/>
                <div>
                    <Nudge />
                    <Home/>
                    <p>Lorem ipsum</p>
                </div>
                <Footer/>
            </Container>
        )
    }
}