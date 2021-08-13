import React, { Component } from 'react';
//import ReactStates from './components/ReactStates';
import "./App.css";
import Counters from './components/Counters';
import PropsAndStates from './components/PropsAndStates';


class App extends Component {
    render() {
      return (
        <div>
          <div className="App">
                  <PropsAndStates 
                  name="Manikandaraja" 
                  heroName = "Developer"/>
          </div>
        </div>
      )
    }
}

export default App