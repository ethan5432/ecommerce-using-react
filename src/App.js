import Nav from "./components/Nav";
import Landing from './components/Landing.jsx'
import Highlights from './components/Highlights.jsx'
import Featured from './components/Featured.jsx'
import Discounted from "./components/Discounted";
import Explore from "./components/Explore.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <div>
      <Nav></Nav>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
