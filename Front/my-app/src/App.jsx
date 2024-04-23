import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;