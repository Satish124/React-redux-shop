import logo from './logo.svg';
import "./index.css";
import './App.css';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Header";
import {Provider} from 'react-redux'; // iski madad s store app m inject krte h
import store from "./store/store";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Route>
      </Routes></BrowserRouter></Provider>
    </div>
  );
}

export default App;
