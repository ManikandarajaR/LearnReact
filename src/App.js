import React, { Component } from 'react';
//import ReactStates from './components/ReactStates';

import Counters from './components/Counters';
import PropsAndStates from './components/PropsAndStates';
//import EvenHandling from './components/EvenHandling';
import "./App.css";
import ReactBind from './components/ReactBind';
import ListAndKey from './components/conditional/ListAndKey';
//import MethodProps from './components/MethodProps';
//import ListRendering from './components/conditional/ListRendering'

class App extends Component {
    render() {
      return (
        <div>
          {/* <div className="App">
                  <PropsAndStates 
                  name="Manikandaraja" 
                  heroName = "Developer"/>
          </div> */}
                 {/*<MethodProps/>*/}
                 <ListAndKey/>
        </div>
      )
    }
}

export default App