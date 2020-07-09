import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from '../Header/Header'
import '../Form/Form.css'


class Form extends Component{
  constructor(props){
    super(props);

    this.state= {
      name: '',
      price: 0,
      image: '',
      id: null,
      editView: true,
      selectedItem: {}
      
    }
    this.baseState = this.state
  }

  componentWillMount(){
      if(this.props.match.params.id){
    axios.get(`/api/product/${this.props.match.params.id}`)
    .then(res => {
      this.setState({name: res.data[0].product_name,
      price: res.data[0].price, image: res.data[0].image_url, id: res.data[0].product_id})
        console.log(this.state.selectedItem)
      }) 
      .catch(err => console.log(err));
      
    }
    
  }


  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.handleCancel();
    }

  }

  getSingleItem = () => {
   return axios.get(`/api/product/${this.props.match.params.id}`)
    .then(res => {
      this.setState({selectedItem: res.data})
        // console.log(this.state.selectedItem)

    }) 
    .catch(err => console.log(err));
    
  }

  addItem = () => {
    axios.post('/api/product', {imageUrl: this.state.image, productName: this.state.name, price: this.state.price })
      .then(() => this.props.getItems())
      .then(() => this.handleCancel())
      .catch(err => console.log(err))

  }

  editItem = () => {
    axios.put(`/api/product/${this.state.id}`,
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
        <Header/>
      <main>
        <div className='product'>
        <img className='product-image' src={this.state.image} />
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
        <Link to='/'>
        <button onClick={this.handleCancel}>Cancel</button>
        </Link>
        {this.props.match.params.id
        ? (
          <Link to='/'>
          <button onClick={this.editItem}>Save Changes</button>
          </Link>
        )
        : (<Link to='/'>  
        <button onClick={this.addItem}>Add to Inventory</button>
        </Link>)}
        </div>
        </main>
      </div>
    )
  }
}

export default Form;