import React from "react"

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            insideCart: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        if (this.state.insideCart.length === 0) {
            this.setState({ 
                insideCart: this.state.insideCart.concat([{id: this.props.id, name: this.props.name, price: this.props.price, amount: this.props.amount}])
            }, () => {console.log(this.state.insideCart)})
        }
        else {
            const newAmount = this.state.insideCart[0].amount + this.props.amount
            this.setState({
                insideCart: [{id: this.props.id, name: this.props.name, price: this.props.price, amount: newAmount}]
            }, () => {console.log(this.state.insideCart[0])})
        }
    }

    render() {
        if (window.location.pathname !== '/cart'){
            return <div><button onClick={this.handleClick}>Add to Cart</button></div>
        }
        else {
            if (this.state.insideCart.length === 0){
                return (<div>Your cart is empty</div>)
            }
            else {
                return (<div>{this.state.insideCart.name}</div>)
            }
        }
    }
}

export default ShoppingCart