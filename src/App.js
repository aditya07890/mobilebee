import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Checkout, Home, Login, ProductList } from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categroies";
import Product from "./components/FeaturedProducts";
import CartEmprty from "./container/cartemprty";
import MyOrder from "./container/myorder";
import NewAddress from "./components/address";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        <Route path="/yourcart" element={<CartEmprty />} />
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/newaddress" element={<NewAddress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
