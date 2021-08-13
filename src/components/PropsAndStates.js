import React from 'react'

const PropsAndStates = (props) => {
     const {name, heroName} = props;
     return (
          <div>
               <h1>Hello {name} works as {heroName}</h1>
          </div>
     )
}

export default PropsAndStates
