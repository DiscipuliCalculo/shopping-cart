import logo from './logo.svg';
import './App.css';
import RouteSwitch from './components/RouteSwitch';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <span>Homepage</span>
        <span>Products</span>
      </div>
      <RouteSwitch />
    </div>
  );
}

export default App;
