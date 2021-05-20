import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

class Error extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="display-1 mt-5">Error 404!!</div>
                <p>Page not found...</p>
                <div className="py-5">
                    <Link className="btn btn-warning" to="/">Back to home page</Link>
                </div>                
            </div>
        )
    }
}

export default Error
