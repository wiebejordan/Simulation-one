import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Header/Header.css';

class Header extends Component{




  render(){
    return(
      <div className='header'>
        <header>SHELFIE</header>
        <div className='menu'>
        <Link to='/'>
        <button>Dashboard</button>
        </Link>
        <Link to='/add'>
        <button>Add Inventory</button>
        </Link>
        </div>
      </div>
    )
  }
}

export default Header;