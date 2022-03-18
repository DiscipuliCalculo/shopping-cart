import React from "react";
import ProductCard from "./ProductCard";
import productList from "./productList";

const productLine = productList.map((product) => <ProductCard key={product.id} price={product.price} name={product.name} image={product.image}/>)

function Products(){
    return(
        <div className="Products">
            {productLine}
        </div>
    )
}

export default Products;