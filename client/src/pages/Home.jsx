import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <Categories />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
