import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import Cart from '../components/Cart';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Eco Flight Discs 🥏';
  }, []);

  return (
    <div className="container">
      <Categories />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
