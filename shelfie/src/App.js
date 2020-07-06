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
        itemArr: []
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
  return (
    <div className="App">
      <Header/>
      <Dashboard
      itemArr={this.state.itemArr}/>
      <Form
      getItems={this.getItems}/>
    </div>
  );
  }
}

export default App;
