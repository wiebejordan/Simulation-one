import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import {HashRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        itemArr: [],
        selectedItem: {}
      }
      
    }
  
  render(){
    
  return (
    <HashRouter>
    <div className="App">
      
      
      {routes}
    </div>
    </HashRouter>
  );
  }
}

export default App;
