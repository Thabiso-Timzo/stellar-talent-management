import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>
        <Route path="/about" component={About} exact>
          <About />
        </Route>
        <Route path="/gallery" component={Gallery} exact>
          <Gallery />
        </Route>
        <Route path="/contact" component={Contact} exact>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;