import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component{

render(){
const itemMap= this.props.itemArr.map((item, i) => (
    <Product
    key={i}
    item={item}/>
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