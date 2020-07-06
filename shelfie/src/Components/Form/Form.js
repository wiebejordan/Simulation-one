import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
  constructor(props){
    super(props);

    this.state= {
      name: '',
      price: '',
      image: '',
      editView: true
    }
    this.baseState = this.state
  }

  addItem = () => {
    axios.post('/api/product', {imageUrl: this.state.image, productName: this.state.name, price: this.state.price })
      .then(() => this.props.getItems())
      .then(() => this.handleCancel())
      .catch(err => console.log(err))

  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCancel = () => {
    this.setState(this.baseState)
  }

  handleAdd = () => {
    let itemInput = {
      imageUrl: this.state.image,
      name: this.state.name,
      cost: this.state.price
    }
  }

  handleToggle = () => {
    this.setState({editView: !this.state.editView})
  }

  render(){
    return(
      <div>
        Form
        <img src={this.state.image} />
        <input
         name='image'
         value={this.state.image}
         onChange={e => this.handleInput(e)}
         placeholder='Enter product image url'/>
        <input
         name='name'
         value={this.state.name}
         onChange={e => this.handleInput(e)}
         placeholder='Enter Product Name'/>

        <input 
        name='price'
        value={this.state.price}
        onChange={e => this.handleInput(e)}
        placeholder='Enter Product Price'/>
        <button onClick={this.handleCancel}>Cancel</button>
        {this.state.editView
        ? (
        <button onClick={this.addItem}>Add to Inventory</button>
        )
        : (<button>Save Changes</button>)}
      </div>
    )
  }
}

export default Form;