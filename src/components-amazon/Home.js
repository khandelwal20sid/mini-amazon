import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

class Home extends Component {

    constructor(props) {
        super(props)                 
    }

    itemData = {
        items: [
            {
                id: 0,
                img:"img/51kGDXeFZKL._AC_UY218_.jpg",
                name:"New Apple iPhone 12 Mini (128GB) - Black",
                ourPrice:"₹71,155",
                marketPrice:"₹74,900" 
            },
            {
                id: 1,
                img:"img/61d-phh4GfL._AC_UY218_.jpg",
                name:"New Redmi 10 Mini (128GB) - Black",
                ourPrice:"₹10,155",
                marketPrice:"₹15,900" 
            },
            {
                id: 2,
                img:"img/71AYb2AGHXL._AC_UL320_.jpg",
                name:"New Apple iPhone 10 Mini (128GB) - Black",
                ourPrice:"₹51,155",
                marketPrice:"₹54,900" 
            },
            {
                id: 3,
                img:"img/71hDPUM7VPL._AC_UL320_.jpg",
                name:"Redmi 9A Mini (128GB)- Black",
                ourPrice:"₹21,155",
                marketPrice:"₹24,900" 
            }
        ]
        
    }       
    

    render() {                     
        return (
            <div>
                <Navbar />
                <div className="h1 pt-5">
                    Top Deals!!
                </div>
                {this.itemData.items.map(item =>{
                    return (
                        <div key={item.id} className="container py-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card py-3 bg-light">
                                        <div className="row">
                                            <div className="col-md-4 col-12"><img className="product-img" src={item.img}/></div>
                                            <div className="col-md-8 col-12 d-flex flex-column justify-content-center text-left py-3 px-lg-0 px-4">
                                                <h3>{item.name}</h3>
                                                <h2>{item.ourPrice}<del className="h6 text-danger px-2">{item.marketPrice}</del></h2>                                                
                                                <Link className="btn-sm btn-primary text-center py-2 w-25" to={{
                                                    pathname:"/cart",
                                                    aboutProps:{
                                                        img: item.img,                    
                                                        name: item.name,
                                                        ourPrice: item.ourPrice ,
                                                        marketPrice: item.marketPrice,
                                                    }
                                                    }}                                                             
                                                >Buy Now</Link>                                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>               
                        </div>
                    )
                })}                                                
            </div>            
        )        
    }
}

export default Home
