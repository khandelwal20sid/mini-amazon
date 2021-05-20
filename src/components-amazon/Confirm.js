import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Error from './Error'
import { Redirect } from "react-router";

class Confirm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            currentDateTime: Date().toLocaleString()
        }
    }
    

    render() {
        const data = this.props.location.aboutProps;
        console.log("data",data);
        if ( data == null) {
            // return <Redirect to="/error" />
            return <Error />
        }
        return (
            <div>
            <Navbar />
                <div className="container py-4 bg-light border my-5">
                    <h1>Purchase Successful!!</h1>
                    <div className="lead-text">Thank you for shopping</div>
                    <div className="text-left pt-5">
                        <div className="py-2 h4">Your Details</div>
                        <div className="py-1">Name: <span className="font-weight-bold">{this.props.location.aboutProps.userName}</span> </div>
                        <div className="py-1">Address: <span className="font-weight-bold">{this.props.location.aboutProps.userAddress}</span></div>
                        <div className="py-1">Email: <span className="font-weight-bold">{this.props.location.aboutProps.userEmail}</span></div>
                        <div className="py-1">Pin: <span className="font-weight-bold">{this.props.location.aboutProps.userPin}</span></div>
                        <div className="py-1">Contact: <span className="font-weight-bold">{this.props.location.aboutProps.userContact}</span></div>
                        <div className="py-1">Order time: <span className="font-weight-bold">{ this.state.currentDateTime }</span></div>
                        <div className="py-1">Expected Delivery Date: <span className="font-weight-bold">Within 3-4 working days :&#41;</span></div>
                    </div>
                    <div className="pt-5 pb-2 h4 text-left">Your Order</div>
                    <div className="row bg-light">
                        <div className="col-12">
                            <div className="card py-3">
                                <div className="row">
                                    <div className="col-md-4 col-12"><img className="product-img" src={this.props.location.aboutProps.img}/></div>
                                    <div className="col-md-8 col-12 d-flex flex-column justify-content-center text-left py-3">
                                        <h3>{this.props.location.aboutProps.name}</h3>
                                        <h2>{this.props.location.aboutProps.ourPrice}<del className="h6 text-danger px-2">{this.props.location.aboutProps.marketPrice}</del></h2>                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 className="mt-5"><button className="btn btn-warning"><Link to="/"><span className="text-white">Continue Shopping</span></Link></button></h6>
                </div>
            </div>
        )
    }
}

export default Confirm
