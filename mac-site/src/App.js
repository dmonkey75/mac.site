import React from 'react'; 
import { Navigation, Hero, Home, Portfolio, Resume, Contact, About } from './components';
import {  GlobalStyle } from './elements';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Hero />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Portfolio' component={Portfolio}></Route>
        <Route exact path='/Resume' component={Resume}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route exact path='/About' component={About}></Route>
      </Switch> 
    </Router>
  );
}

export default App;
