import React, {Component} from 'react';
import './product.css';


class Product extends Component{




  render(){
    return(
      <div>
        <img src={this.props.item.image_url}/>
         <p>Name:{this.props.item.product_name}</p>
         <p>Cost:{this.props.item.price}</p>
      </div>
    )
  }
}

export default Product;