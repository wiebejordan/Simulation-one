import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        itemArr: [
          {
            name: 'shoes',
            price: 4,
            image: 'https://lor66yzmui-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/decker_306-830x467.jpg'

          },
          {
            name: 'pants',
            price: 5,
            image: 'https://lor66yzmui-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/decker_306-830x467.jpg'
          },
          {
            name: 'shorts',
            price: 6,
            image: 'https://lor66yzmui-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/decker_306-830x467.jpg'
          }
        ]
      }
    }
  
  render(){
  return (
    <div className="App">
      <Header/>
      <Dashboard
      itemArr={this.state.itemArr}/>
      <Form/>
    </div>
  );
  }
}

export default App;
