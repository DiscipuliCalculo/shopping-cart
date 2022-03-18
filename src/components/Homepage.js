import React from "react";

function Homepage(props) {
    return (
        <div>
            <h1>Welcome to the Random Things Store</h1>
            <div><img alt="Random Images" src={require("../images/roulette.jpeg")} /></div>
            <div><h3>Check Out Our Products</h3></div>
            <div>
                <span><p>Lorem 1</p></span>
                <span><p>Lorem 2</p></span>
            </div>
        </div>
    )
}

export default Homepage;