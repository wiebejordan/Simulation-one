import React, {Component} from 'react';

class Form extends Component{
  constructor(props){
    super(props);

    this.state= {
      name: '',
      price: 0,
      image: '',
    }
    this.baseState = this.state
  }

  handleImageInput = (val) => {
    this.setState({image: val})
  }

  handleNameInput = (val) => {
    this.setState({name: val})
  }

  handlePriceInput = (val) => {
    this.setState({price: val})
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

  render(){
    return(
      <div>
        Form
        <img src={this.state.image} />
        <input
         value={this.state.image}
         onChange={e => this.handleImageInput(e.target.value)}
         placeholder='Enter product image url'/>
        <input
         value={this.state.name}
         onChange={e => this.handleNameInput(e.target.value)}
         placeholder='Enter Product Name'/>

        <input 
        value={this.state.price}
        onChange={e => this.handlePriceInput(e.target.value)}
        placeholder='Enter Product Price'/>
        <button
        onClick={this.handleCancel}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;