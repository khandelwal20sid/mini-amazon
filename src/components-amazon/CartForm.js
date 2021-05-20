import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar'
import Error from './Error'

class CartForm extends Component {

    constructor(props) {
        super(props)
    
        
        this.state = {             
            fname:'',
            lname:'',
            address:'',
            email:'',
            pin:'',
            contact:'',
            goodtogo: false          
        }
        
    }
 

    handlefname=(event)=>{
        this.setState({
            fname:event.target.value
        })
    }

    handlelname=(event)=>{
        this.setState({
            lname:event.target.value
        })
    }

    handleaddress=(event)=>{
        this.setState({
            address:event.target.value
        })
    }

    handleemail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }

    handlepin=(event)=>{
        this.setState({
            pin:event.target.value
        })
    }

    handlecontact=(event)=>{
        this.setState({
            contact:event.target.value
        })
    }

    handleSubmit=(event) => {
        event.preventDefault();        
        if (this.state.fname=="") {
            alert("All input fields are required!!")           
            document.getElementById('fname').style.borderColor="red"
        }
        else if(this.state.fname.length > 15) {
            alert("Exceeded first name character limit!!")
        }
        else if(this.state.lname=="") {
            alert("All input fields are required!!")   
            document.getElementById('lname').style.borderColor="red"
        }
        else if(this.state.lname.length >15) {
            alert("Exceeded last name character limit!!")
        }
        else if(this.state.address=="") {
            alert("All input fields are required!!")   
            document.getElementById('address').style.borderColor="red"
        }
        else if(this.state.address.length >50) {
            alert("Exceeded address character limit!!")
        }
        else if(this.state.email=="") {
            alert("All input fields are required!!")   
            document.getElementById('email').style.borderColor="red"
        }
        else if(!this.state.email.match(/^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i)) {
            alert("Invalid Email!!")
        }
        else if(this.state.email.length >50) {
            alert("Exceeded email character limit!!")
        }
        else if(this.state.pin=="") {
            alert("All input fields are required!!")
            document.getElementById('pin').style.borderColor="red"
        }
        else if(this.state.pin.length >7) {
            alert("Exceeded pin character limit!!")
        }
        else if(this.state.contact=="") {
            alert("All input fields are required!!")
            document.getElementById('contact').style.borderColor="red"
        }
        else if(this.state.contact.length >10) {
            alert("Exceeded contact character limit!!")
        }
        else {            
            this.setState({
                goodtogo:true
            })                 
        }             
    }     

    render(props) {
        const goodtogo = this.state.goodtogo;       
        const data = this.props.location.aboutProps;
        console.log("data",data);
        if ( data == null) {
            // return <Redirect to="/error" />
            return <Error />
        }      
        if (goodtogo) {
            return <Redirect to={{
                pathname:"/invoice",
                aboutProps:{
                    userName: `${this.state.fname} ${this.state.lname}`,
                    userAddress: this.state.address,
                    userEmail: this.state.email,
                    userPin: this.state.pin,
                    userContact: this.state.contact,
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
                <h1>Shopping Cart</h1>
                <form className="py-3">
                    <div className="py-2">
                        <input
                            className="w-25 mr-2" 
                            type="text"
                            placeholder="First Name"
                            name="fname"
                            id="fname"
                            maxLength = "15"
                            value={this.state.fname}
                            onChange={this.handlefname}
                        />
                        <input 
                            className="w-25"
                            type="text"
                            placeholder="Last Name"
                            name="lname"
                            id="lname"
                            maxLength = "15"
                            value={this.state.lname}
                            onChange={this.handlelname}
                        />
                    </div>
                    <div className="py-2">
                        <input 
                            className="w-25 mr-2"
                            type="text"
                            placeholder="Shipping Address"
                            name="address"
                            id="address"
                            maxLength = "50"
                            value={this.state.address}
                            onChange={this.handleaddress}
                        />
                        <input
                            className="w-25"
                            name = "email"
                            id = "email"                            
                            placeholder = "Enter Email"                           
                            maxLength = "50"
                            value = {this.state.email}
                            onChange = {this.handleemail}
                        />                       
                    </div>
                    <div className="py-2">
                        <input 
                            className="w-25 mr-2" 
                            type="tel"
                            placeholder="pin"
                            name="pin"
                            id="pin"
                            maxLength = "7"
                            value={this.state.pin}
                            onChange={this.handlepin}
                        />
                        <input 
                            className="w-25" 
                            type="tel"
                            placeholder="Contact"
                            name="contact"
                            id="contact"
                            maxLength = "10"
                            value={this.state.contact}
                            onChange={this.handlecontact}
                        />                        
                    </div>                    
                </form>
                <div className="pt-5">
                    <h5>Selected Items</h5>
                </div>                
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
            <div>
                <h6><button className="btn btn-warning" onClick={this.handleSubmit}>Next -&gt;</button></h6>
            </div>
            </div>
        )
    }
}

export default CartForm
