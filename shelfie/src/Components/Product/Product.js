import React, {Component} from 'react';
import './product.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Product extends Component{

  
  deleteItem = () => {
    axios.delete(`/api/product/${this.props.item.product_id}`)
      .then (() => this.props.getItems())
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div className='product'>
        <div className='product-flex'>
          <div className='product-image'>
        <img src={this.props.item.image_url}/>
          </div>

         <div className='product-info'>
            <div className='product-text'>

              <p>Name:{this.props.item.product_name}</p>
               <p>Cost:{this.props.item.price}</p>
           </div>
         <Link to={`/edit/${this.props.item.product_id}`}>
         <button >Edit</button>
         </Link>
         <button onClick={this.deleteItem}
         >Delete</button>
         </div>
         </div>
      </div>
    )
  }
}

export default Product;