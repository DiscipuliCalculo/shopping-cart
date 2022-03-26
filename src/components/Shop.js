import React from "react";
import ProductCard from "./ProductCard";
import productList from "./productList";


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

    render() {
        let totalAmount = 0;
        let totalPrice = 0;
        for (let i = 0; i < this.state.insideCart.length; i++) {
            totalAmount = totalAmount + this.state.insideCart[i].amount;
            totalPrice = totalPrice + (this.state.insideCart[i].amount * this.state.insideCart[i].price)
        }
        totalAmount = totalAmount.toString();
        totalPrice = totalPrice.toString();

        return (
            <div>
                <div>Number of Items: {totalAmount} Cost: ${totalPrice}</div>
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