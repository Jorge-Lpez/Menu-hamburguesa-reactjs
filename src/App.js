import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Galeria from "./pages/Galeria";
import Nosotros from "./pages/Nosotros";

const App = () => {
  return ( 
    <Router>
      <Navbar/>
      <Switch>
            <Route path="/" exact component={Inicio}/>
            <Route path="/galeria"  component={Galeria}/>
            <Route path="/contacto"  component={Contacto}/>
            <Route path="/nosotros"  component={Nosotros}/>
      </Switch>
    </Router>
  );
}
 
export default App;

