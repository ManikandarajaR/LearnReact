import React, { Component } from 'react';
//import ReactStates from './components/ReactStates';

import Counters from './components/Counters';
import PropsAndStates from './components/PropsAndStates';
//import EvenHandling from './components/EvenHandling';
import "./App.css";
import ReactBind from './components/ReactBind';
import MethodProps from './components/MethodProps';
class App extends Component {
    render() {
      return (
        <div className="App">
          {/* <div className="App">
                  <PropsAndStates 
                  name="Manikandaraja" 
                  heroName = "Developer"/>
          </div> */}
                 <MethodProps/>
        </div>
      )
    }
}

export default App