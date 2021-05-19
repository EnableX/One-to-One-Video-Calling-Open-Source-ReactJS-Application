import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Room from "./pages/Room";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/room/:token" children={<Room />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
