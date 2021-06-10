import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";

const App = () => {
  return ( 
    <Router>
      <Navbar/>
      <Switch>
            <Route path="/" exact component={Inicio}/>
      </Switch>
    </Router>
  );
}
 
export default App;

