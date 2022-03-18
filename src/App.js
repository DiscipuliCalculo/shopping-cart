import './App.css';
import RouteSwitch from './components/RouteSwitch';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <span>Homepage</span>
        <span className='emptySpace'></span>
        <span>Products</span>
      </div>
      <RouteSwitch />
    </div>
  );
}

export default App;
