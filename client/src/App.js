import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './navigation/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Services from './pages/services/Services';
import Home from './pages/Home/Home';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact>
            <Home />
          </Route>
          <Route path='/about' component={About} exact>
            <About />
          </Route>
          <Route path='/services' component={Services} exact>
            <Services />
          </Route>
          <Route path='/gallery' component={Gallery} exact>
            <Gallery />
          </Route>
          <Route path='/contact' component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;