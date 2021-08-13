import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
export class MethodProps extends Component {
     constructor()
     {
          super();

          this.state = {
               parentName : "RajSamy"
          }
     }

     parentNames = (ChildName) =>
     {
          alert(`Hello ${this.state.parentName} - ${ChildName}`);
     }
     render() {
          return (
               <div>

                    <ChildComponent  
                    handlerName = {this.parentNames}/>
               </div>
          )
     }
}

export default MethodProps
