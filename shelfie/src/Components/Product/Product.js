import React, {Component} from 'react';
import './product.css';
import axios from 'axios';


class Product extends Component{

  
  deleteItem = () => {
    axios.delete(`/api/product/${this.props.item.product_id}`)
      .then (() => this.props.getItems())
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <img src={this.props.item.image_url}/>
         <p>Name:{this.props.item.product_name}</p>
         <p>Cost:{this.props.item.price}</p>
         <button onClick={this.deleteItem}>Delete</button>
         <button onClick={() => this.props.selectItem(this.props.item)}>Edit</button>
      </div>
    )
  }
}

export default Product;