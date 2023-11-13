import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Recommendation from './Recommendation';
import Footer from './Footer';
import '../styles/Layout.css';
import { useEffect, useState } from 'react';


function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [isFooterShown, updateIsFooterShown] = useState(true);
  
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="la maison jungle" className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
        <Recommendation />
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      </div>
      <button onClick={() => updateIsFooterShown(!isFooterShown)}>Cacher !</button>
      {isFooterShown && <Footer cart={cart} />}
    </div>
  )
}

export default App;
