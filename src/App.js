import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowsGallery from './ShowsGallery';
import Details from './Details';
import NotFound from './NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ShowsGallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:showId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
