import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      paramsVar: "",
      bodyVar: "",
      norrisJoke: ""
    };
  }

  handleGet() {
    axios
      .get("https://api.chucknorris.io/jokes/random?category=dev")
      .then(results => {
        console.log(results);
        this.setState({ norrisJoke: results.data.value });
      });
  }

  handlePost() {}

  render() {
    return (
      <div className="App">
        <h1>Axios from Front to Server</h1>

        <p>Chuck Norris Joke</p>
        <button onClick={() => this.handleGet()}>Get</button>
        <br />
        <p>{this.state.norrisJoke ? this.state.norrisJoke : ""}</p>

        <p>This will be passed down through params</p>
        <input onChange={e => this.setState({ paramsVar: e.target.value })} />
        <p>This will be passed in the body</p>
        <input onChange={e => this.setState({ bodyVar: e.target.value })} />
        <br />
        <br />
        <button onClick={() => this.handlePost()}>Axios Call!</button>
      </div>
    );
  }
}

export default App;

// axios
//   .post(`/api/data/${this.state.paramsVar}`, {
//     bodyVar: this.state.bodyVar
//   })
//   .then(results => {
//     console.log(results);
//   });
