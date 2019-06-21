import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Menu, Header, Container } from "semantic-ui-react";
import Navigation from './Navigation';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends React.Component {
  render() {
    return (
      <Container style={{margin:0}} className="smurfs">
      <Router>
        <div className="App">
          <Navigation />
          <Route 
          path="/" 
          component={Smurfs} />
          <Route
            path="/smurf-form"
            component={SmurfForm}
          />
        </div>
      </Router>
      </Container>
    );
  }
}

export default App;


