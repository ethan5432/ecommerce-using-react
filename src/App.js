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
    const dupeItem = cart.find(item => +item.id === +book.id)
    if (dupeItem) {
      { dupeItem.quantity += 1; }
      setcart(cart.map(item => {
        if (item.id === dupeItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        else {
          return item
        }
      }))
    }
    else {
      setcart([...cart, {...book, quantity: 1}])
    }
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
        <Route path="/books/:id" render={() => <Bookinfo books={books} addToCart={addToCart} />} />
        <Route path="/cart" render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
