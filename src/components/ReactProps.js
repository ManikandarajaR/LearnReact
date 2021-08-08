import React, { Component } from 'react';
import Greet from './Greet';
import '../css/props.css'

class ReactProps extends Component {
     render() {
          return (
               <div className="props">
                         <h1>React Props</h1>
                         <Greet name="Manikandaraja" work="Software Developer"/>
                         <Greet name="Saravana kumar" work="Software Developer"/>
                         <Greet name="Muthu pandi" work="IAS"/>
                                 

               </div>
          )
     }
}

export default ReactProps
