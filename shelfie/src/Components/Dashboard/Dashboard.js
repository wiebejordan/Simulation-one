import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component{

// deleteItem = () => {
//   axios.delete(`/api/product/${this.item.product_id}`)
//     .then (() => this.props.getItems())
//     .catch(err => console.log(err))
// }

render(){
  const itemMap= this.props.itemArr.map((item, i) => (
    <Product
    key={i}
    item={item}
    getItems={this.props.getItems}
    />
    ));
    
    
    return(
      <div>
        Dashboard
        {itemMap}
        
      </div>
    )
}
}


export default Dashboard;