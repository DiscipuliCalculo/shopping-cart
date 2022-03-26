import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import Shop from "./Shop";

const RouteSwitch = () => {

    const navigate = useNavigate();

    const handleHomepage = () => {
      navigate('/');
    }
  
    const handleShop = () => {
      navigate('/shop');
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