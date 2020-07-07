import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Header/Header.css';

class Header extends Component{




  render(){
    return(
      <div className='header'>
        <Link to='/'>
        <button>Dashboard</button>
        </Link>
        <Link to='/add'>
        <button>Add Inventory</button>
        </Link>
      </div>
    )
  }
}

export default Header;