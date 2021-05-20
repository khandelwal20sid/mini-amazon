import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Navbar from './Navbar'
import Error from './Error'


export class Invoice extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             confirm:false
        }
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({
            confirm:true
        })
    }

    render() {
        const confirm = this.state.confirm;
        const data = this.props.location.aboutProps;
        console.log("data",data);
        if ( data == null) {
            // return <Redirect to="/error" />
            return <Error />
        }
        if (confirm) {
            return <Redirect to= {{
                pathname:"/confirm",
                aboutProps:{
                    userName: this.props.location.aboutProps.userName,
                    userAddress: this.props.location.aboutProps.userAddress,
                    userEmail: this.props.location.aboutProps.userEmail,
                    userPin: this.props.location.aboutProps.userPin,
                    userContact: this.props.location.aboutProps.userContact,
                    img: this.props.location.aboutProps.img,                    
                    name: this.props.location.aboutProps.name,
                    ourPrice: this.props.location.aboutProps.ourPrice ,
                    marketPrice: this.props.location.aboutProps.marketPrice,
                }
            }} />
        }
        return (
            <div>
            <Navbar />
                <div className="container my-5 text-center px-4 py-4 border">
                    <h2 className="border-bottom p-2">One last step...</h2>
                    <div className="text-left pt-5">
                        <div className="py-1 h4">Your Details</div>
                        <div className="py-1">Name: <span className="font-weight-bold">{this.props.location.aboutProps.userName}</span> </div>
                        <div className="py-1">Address: <span className="font-weight-bold">{this.props.location.aboutProps.userAddress}</span></div>
                        <div className="py-1">Email: <span className="font-weight-bold">{this.props.location.aboutProps.userEmail}</span></div>
                        <div className="py-1">Pin: <span className="font-weight-bold">{this.props.location.aboutProps.userPin}</span></div>
                        <div className="py-1">Contact: <span className="font-weight-bold">{this.props.location.aboutProps.userContact}</span></div>
                    </div>
                    <div className="text-left pt-5">
                        <div className="py-1 h4">Your Order</div>
                        <div className="container pb-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="card py-3 bg-light">
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
                        </div>                        
                    </div>
                    <h6><button className="btn btn-warning" onClick={this.handleSubmit}>Confirm Purchase</button></h6>
                </div>
            </div>
        )
    }
}

export default Invoice
