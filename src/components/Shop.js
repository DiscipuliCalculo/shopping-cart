import React from "react";
import ProductCard from "./ProductCard";
import productList from "./productList";
import Cart from "./Cart";


class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            insideCart: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (itemId, itemName, itemPrice, itemAmount) => {
        this.setState({
            insideCart: this.state.insideCart.concat([{id: itemId, name: itemName, price: itemPrice, amount: itemAmount}])
        }, () => {console.log(this.state.insideCart)})
        let totalAmount = 0;
        for (let i = 0; i < this.state.insideCart.length; i++) {
            totalAmount = totalAmount + this.state.insideCart[i].amount
        }
    }

    /*
    handleClick = (e) => {
        e.preventDefault();
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
    */

    render() {
        let totalAmount = 0;
        for (let i = 0; i < this.state.insideCart.length; i++) {
            totalAmount = totalAmount + this.state.insideCart[i].amount;
        }
        totalAmount = totalAmount.toString();
        

        return (
            <div>
                <div><p>{totalAmount}</p></div>
                <div><img src="" alt="" /></div>
                <div className="Products">
                    {productList.map((product) => <ProductCard 
                    key={product.id} 
                    id={product.id} 
                    price={product.price} 
                    name={product.name} 
                    image={product.image} 
                    action={this.handleClick}/>)}
                </div>
                <div><img src="" alt="" /> </div>
            </div>
        )
    }
}

export default Shop;