import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
  constructor(props){
    super(props);

    this.state= {
      name: '',
      price: 0,
      image: '',
      editView: true,
      selectedId: this.props.selectedItem.product_id
    }
    this.baseState = this.state
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.selectedItem !== this.props.selectedItem){
      this.setState({editView: !this.state.editView})
      this.setState({name: this.props.selectedItem.product_name,
      price: this.props.selectedItem.price,
      image: this.props.selectedItem.image_url })
    }

  }

  addItem = () => {
    axios.post('/api/product', {imageUrl: this.state.image, productName: this.state.name, price: this.state.price })
      .then(() => this.props.getItems())
      .then(() => this.handleCancel())
      .catch(err => console.log(err))

  }

  editItem = () => {
    axios.put(`/api/product/${this.props.selectedItem.product_id}`,
    {imageUrl: this.state.image, productName: this.state.name, price: this.state.price})
    .then(() => this.props.getItems())
    .catch(err => console.log(err))
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCancel = () => {
    this.setState(this.baseState)
  }


  handleToggle = () => {
    this.setState({editView: !this.state.editView})
  }

  render(){
    return(
      <div>
        
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
        : (<button onClick={this.editItem}>Save Changes</button>)}
      </div>
    )
  }
}

export default Form;