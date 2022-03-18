import React from "react";

function ProductCard(props) {
    return (
        <div className="productCard" key={props.id}>
            <div><h4>{props.name}</h4></div>
            <div><img className="productImage" index={props.id} src={props.image} alt={props.name} /></div>
            <div>
                <p>${props.price}</p>
                <div>
                    <span><input className="numberItems"></input></span>
                    <span><button>+</button></span>
                    <span><button>-</button></span>
                </div>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;