import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const APP_ID = "ff0b5612";
const APP_KEY = "caf72f490e4c5fc8fd8535334b538aa0";

class App extends React.Component {
  req =
    "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}";

  // useEffect(() => {
  //   console.log("Effect has been run")
  // })

  render() {
    return (
      <div className="App">
        <form className="search-form">
          <input type="text" name="" id="" className="search-bar" />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default App;
