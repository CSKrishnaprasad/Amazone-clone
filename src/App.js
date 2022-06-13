import './App.css';
import Home from './Home';
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';




 
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={[<Login />]} />
        <Route path="/checkout" element={[<Header /> ,<Checkout />]} />
        <Route path="/" element={[<Header />,<Home />]} />
      </Routes>
    </div>
  );
}

export default App;
