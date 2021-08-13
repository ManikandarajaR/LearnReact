import React from 'react'

function persons({person}) {
     return (
          <div>
               <h1>Name : {person.name}</h1>
               <h2>Age    : {person.age}</h2>
          </div>
     )
}

export default persons
