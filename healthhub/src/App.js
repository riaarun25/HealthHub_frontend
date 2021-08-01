import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurVision from './pages/OurVision';
import ContactUs from './pages/ContactUs';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ourvision" exact component={OurVision} />
        <Route path="/contactus" exact component={ContactUs} />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
