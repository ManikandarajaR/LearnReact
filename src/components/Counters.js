import React, { Component } from 'react'

class Counters extends Component {

     constructor(props)
     {
          super(props);

          this.state = {
               count : 0
          }
     }

     incrementFive = () =>
     {
          this.increment();    
          this.increment();
          this.increment();
          this.increment();
          this.increment();
     }    

     increment = () =>
     {
          // this.setState(
          //      {
          //           count :  this.state.count + 1
          //      },
          //      () =>
          //      {
          //           console.log("Call back value : " , this.state.count)
          //      }
          // )

          this.setState((prevState) => (
               {
                    count : prevState.count + 1
               }
          ))
          console.log(this.state.count);


     }

     render() {
          return (
               <div>
                    <div>
                        <h1>Count - {this.state.count}</h1> 
                    </div>
                    <button onClick={this.incrementFive}>
                         Increment
                    </button>
      
               </div>
          )
     }
}

export default Counters
