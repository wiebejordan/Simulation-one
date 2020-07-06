import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
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

    selectItem = (item) => {
      this.setState({selectedItem: item})
      console.log(this.state.selectedItem)
    }
  render(){
    
  return (
    <div className="App">
      <Header/>
      <Dashboard
      itemArr={this.state.itemArr}
      getItems={this.getItems}
      selectItem={this.selectItem}/>
      <Form
      getItems={this.getItems}
      selectedItem={this.state.selectedItem}/>
    </div>
  );
  }
}

export default App;
