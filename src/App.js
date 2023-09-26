import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() =><Books books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
