import { render } from "@testing-library/react";
import { useState } from "react";
import {itemList, ShoppingCartInfo} from "./ShoppingCart";

function ProductCard(props) {
    let [Amount, setNum] = useState(0);
    let [productList, setState] = useState(itemList)

    let Increment =() => {
        setNum(Number(Amount) + 1)
    }

    let Decrement = () => {
        if (Amount > 0) {
            setNum(Number(Amount) + 1)
        }
    }

    let handleChange = (e) => {
        setNum(e.target.value);
    }

    function addtoCart(e) {
        e.preventDefault()

        const found = itemList.findIndex(item => item.itemId === props.id);
        if (found === -1) {
            itemList.push({
            itemId: props.id,
            itemName: props.name,
            itemAmount: Amount,
            itemPrice: props.price
            });
        }
        else {
            itemList[found].itemAmount = itemList[found].itemAmount + Amount;
        }
        setState({productList: itemList});
    }

    return (
        <div className="productCard" key={props.id}>
            <div><h4>{props.name}</h4></div>
            <div><img className="productImage" index={props.id} src={props.image} alt={props.name} /></div>
            <form name={props.name} onSubmit={addtoCart} >
                <p>${props.price}</p>
                <div>
                    <span><button type='button' onClick={Increment}>+</button></span>
                    <span><input type='text' value={Amount} className="numberItems" onChange={handleChange}></input></span>
                    <span><button type='button' onClick={Decrement}>-</button></span>
                </div>
                <div>
                    <input type="submit" value="Add to Cart"/>
                </div>
            </form>
            <ShoppingCartInfo shoppingList={productList}/>
        </div>
    )
}

export default ProductCard;