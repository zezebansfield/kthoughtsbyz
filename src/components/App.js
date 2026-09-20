import React from 'react';
import {
  HashRouter, 
  Route,
  Switch
} from 'react-router-dom';

//App components
import Home from './Home';

const App = () => (
  <HashRouter basename="/course-directory">
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

    </div>
  </HashRouter>
);

export default App;