import './App.css';
import RouteSwitch from './components/RouteSwitch';
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
      <BrowserRouter>
        <RouteSwitch/>
      </BrowserRouter>
  );
}

export default App;
