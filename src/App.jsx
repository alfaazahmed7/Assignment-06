import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import StatBar from './components/StatBar/StatBar'
import ProductDesc from './components/Tools/Product/ProductDesc'
import Product from './components/Tools/Product/ProductDesc'
import Products from './components/Tools/Product/Products'

const getProducts = async () => {
  const res = await fetch("/Products.json");
  return res.json();
}
const productsPromise = getProducts();


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <StatBar />
      <ProductDesc />

      <div className="tabs tabs-box justify-center bg-white">
        <input type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Products"
          defaultChecked
        />
        <input type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Cart"
        />
      </div>

      <Products productsPromise={productsPromise} />
    </>
  )
}

export default App