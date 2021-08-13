import React, { Component } from 'react'

export class ReactStates extends Component {

     constructor()
     {
          super();
          this.state = {
               message : "Welcome visitors"
          }
     }

     ChangeMessage = () =>
     {
          this.setState(
               {
                    message : "Thankyou for subscribing"
               }
          )
     }
     render() {
          return (
               <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={this.ChangeMessage}>Subscribe</button>
               </div>
          )
     }
}

export default ReactStates
