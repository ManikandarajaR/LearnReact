import React, { Component } from 'react'



export class ListAndKey extends Component {

     person = [
          {
               name : "Mani",
               age : 21
          },
          {
               name : "Raja",
               age : 21
          },
          {
               name : "Saro",
               age : 21
          }
          
     ]
     render() {
          return (
               <div>
                    {this.person.map((name) =>
                         <div key={name.name}>
                              <h1>Name : {name.name} -  Age : {name.age} </h1>
                        </div>
                    )}

               </div>
          )
     }
}

export default ListAndKey
