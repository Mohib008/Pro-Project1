import React, { Component } from 'react';
import './App.css';
import Portfolio from "./portfolio";


class App extends Component {
  render() {
  return (
    <div className="App">
      <Portfolio title="Fast Foods" ingredients ={['flour', 'water']} />
      </div>
   );
  } 
}


export default App;
