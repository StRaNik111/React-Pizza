import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom'
import NotFound from "./Pages/NotFound/NotFound";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import React from 'react';
import PizzaItem from "./Pages/PizzaItem";


const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<PizzaItem />} />

        <Route path="*" element={<NotFound />} />


      </Routes>
    </div>
  );
}

export default App;
