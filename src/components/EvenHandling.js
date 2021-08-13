import React, { Component } from 'react'

export class EvenHandling extends Component {

     clickHandler()
     {
          alert(
               "Again button clicked..."
          )
          
     }
     render() {
          return (
               <div>
                    <button onClick={this.clickHandler}>Click me</button>
               </div>
          )
     }
}

export default EvenHandling

/* import React from 'react'

export default function EvenHandling() {

     function ClickHandler()
     {
          alert("Button clicked...");
     }
     return (
          <div>
               <button onClick={ClickHandler}>Click</button>
          </div>
     )
}
 */