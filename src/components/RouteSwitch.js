import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import Shop from "./Shop";
import Cart from "./Cart";
import ShoppingCart from "./ShoppingCart";


const RouteSwitch = () => {

    const navigate = useNavigate();
    const [cart, updateCart] =([])

    const handleHomepage = () => {
      navigate('/');
    }
  
    const handleShop = () => {
      navigate('/shop');
    }
  
    const handleCart = () => {
      navigate('/cart');
    }

    return (
        <div className="App">
            <div>
                <span onClick={handleHomepage}>Homepage</span>
                <span className='emptySpace'></span>
                <span onClick={handleShop}>Shop</span>
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </div>
    );
;}

export default RouteSwitch;