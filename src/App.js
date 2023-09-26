import React, {useState, useEffect} from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import Bookinfo from "./Pages/Bookinfo";
import Cart from "./Pages/Cart";

function App() {
  const [cart, setcart] = useState([])

  function addToCart(book) {
    setcart(...cart, {...book, quantity: 1})
  }

  function changeQuantity(book) {
    console.log(book.quantity)
  }

  useEffect(() => {
console.log(cart)
  },[cart])

  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <Bookinfo books={books} cart={cart} addToCart={addToCart} />
          )}
        />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
