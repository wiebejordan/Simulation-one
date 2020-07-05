import React, {Component} from 'react';

class Product extends Component{




  render(){
    return(
      <div>
        <img src={this.props.item.image}/>
         <p>Name:{this.props.item.name}</p>
         <p>Cost:{this.props.item.price}</p>
      </div>
    )
  }
}

export default Product;