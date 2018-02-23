import React, { Component } from 'react';
import './App.css';
import './header/Header.css';
import './accueil/SearchHomepage.css';
import './accueil/results/Result.css';
import './accueil/results/ResultSet.css';

var Header = require("./header/Header");
var SearchHomepage = require("./accueil/SearchHomepage");
var ResultSet = require("./accueil/results/ResultSet");

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { token:"" };

        this.refreshToken = this.refreshToken.bind(this);
    }

    refreshToken () {
        this.setState({ token: sessionStorage.token });
    }

    render() {
    return (
      <div className="App">
          <Header />
          <SearchHomepage/>
          <ResultSet/>
      </div>
    );
  }
}

export default App;
