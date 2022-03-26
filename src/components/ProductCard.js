import React from "react"
import ShoppingCart from "./ShoppingCart";

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            key: props.key,
            id: props.id,
            price: props.price,
            name: props.name,
            image: props.image
        }

        this.Increment = this.Increment.bind(this)
        this.Decrement = this.Decrement.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    Increment = () => this.setState({amount: Number(this.state.amount) + 1})

    Decrement = () => this.setState({amount: Number(this.state.amount) - 1})

    onChange = e => this.setState({ [e.target.name]: e.target.value})

    addtoCart = () => {}


    render() {
        return(
            <div className="ProductCard" key={this.state.key}>
                <div><h4>{this.state.name}</h4></div>
                <div><img className="productImage" src={this.state.image} alt={this.state.name}/></div>
                <div>
                    <p>{this.state.price}</p>
                    <span><button type="button" onClick={this.Increment}>+</button></span>
                    <span><input type='text' className='nubmerItems' name="numberItems" value={this.state.amount} onChange={this.onChange}></input></span>
                    <span><button type="button" onClick={this.Decrement}>-</button></span>
                </div>
                <button type="button" onClick={() => this.props.action(this.state.id, this.state.name, this.state.price, this.state.amount)}>Add to Cart</button>
            </div>
        )
    }
}

export default ProductCard;