import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path='/' exact component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
