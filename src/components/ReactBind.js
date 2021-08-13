import React, { Component } from 'react'

export class ReactBind extends Component {
     constructor()
     {
          super();

          this.state = {
               message : "Hello Manikandaraja"
          }
     }

     ChangeContent()
     {
          // this.setState(
          //      {
          //           message : "Developer"
          //      }
          // )
          console.log(this);
     }
     render() {
          return (
               <div>
                    <h1>{this.state.message}</h1>
                   <button onClick={this.ChangeContent.bind(this)}>Click</button>
               </div>
          )
     }
}

export default ReactBind
