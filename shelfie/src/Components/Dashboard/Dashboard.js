import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import Header from '../Header/Header';

import '../Dashboard/Dashboard.css'


class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      itemArr: [],
      selectedItem: {}
    }
    
  }


  componentDidMount(){
    this.getItems();
  }

  getItems = () => {
    axios.get('/api/inventory')
      .then(res => {
        this.setState({itemArr: res.data})
      }) 
      .catch(err => console.log(err));
  }

  


render(){
  const itemMap= this.state.itemArr.map((item, i) => (
    
    <Product
    key={i}
    item={item}
    getItems={this.getItems}
    selectItem={this.selectItem}
    selectedItem={this.state.selectedItem}
    />
    ));

    
    
    return(
      <div>
        <Header/>
        
       
        
        {itemMap}
      </div>
    )
}
}


export default Dashboard;