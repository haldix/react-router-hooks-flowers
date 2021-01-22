import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Create from './components/Create';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/gallery' exact>
            <Gallery />
          </Route>
          <Route path='/flowers/:id' exact>
            <Details />
          </Route>
          <Route path='/create' exact>
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
