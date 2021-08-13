import React, { Component } from 'react'

export class PropsAndStates extends Component {
     render() {
          const 
          {
               name,
               heroName
          } = this.props;
          
          return (
               <div>
                    <h1>Hello {name} works as {heroName}</h1>
               </div>
          )
     }
}

export default PropsAndStates


/* import React from 'react'

export const PropsAndStates = (props) => {
     const 
     {
          name,
          heroName
     } = props;
     return (
          <div>  
               <h1>Hello {name} works as {heroName}</h1>
          </div>
     )
}
export default PropsAndStates; */
