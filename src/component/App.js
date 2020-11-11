import React from "react";
import "../css/App.scss";
import HeaderComponent from "./headerComponent";
import Category from "./Category";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import books from "./Book";
import Movie from "./Movie"

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={books}></Route>
            <Route exact path="/movie" component={Movie}></Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
