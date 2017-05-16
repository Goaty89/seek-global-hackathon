import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Root extends Component {
    render() {
        return (
            <div>
                <h1>Page home</h1>
                <Link to={"/example"}>Example page</Link>
                {this.props.children}
            </div>
        )
    }
}