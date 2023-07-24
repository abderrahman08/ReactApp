import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css";
import Home from './component/Home';
import Product from './component/Product';
import { Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Cart from './component/Cart';
import Discuss from './component/Discuss';
import Stat from './component/Stat';
import Mycart from './component/Mycart';
import { CartProvider } from './component/CartContext';
import CartProgress from './component/CartProgress';
import GoogleTranslateWidget from './component/GoogleTranslateWidget';

function App() {
  return (
    <div className='App'>
      <CartProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/discuss' element={<Discuss />}/>
        <Route path='/stat' element={<Stat />}/>
        <Route path='/mycart' element={<Mycart />}/>
        

      </Routes>
      </CartProvider>
      <GoogleTranslateWidget />
    </div>
  );
}
    
    export default App;
    
