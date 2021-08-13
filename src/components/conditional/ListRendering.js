import React, { Component } from 'react'
import Persons from './persons';

export class ListRendering extends Component {

     list = ["Mani","Raja","Saro","Muthupandi"];
     listItems =   this.list.map((names) =>
          <h2>{names}</h2>)

     persons = [
          {
               id : 1,
               name : "Manikandaraja",
               age : 21,
               skills : "Web developer"
          },
          {
               id : 2,
               name : "Saravana kumar",
               age : 22,
               skills : "Developer"
          },
          {
               id : 3,
               name : "Muthu pandi",
               age : 21,
               skills : "Developer"
          }
     ]
      
     personList = this.persons.map((person) =>
           <Persons person={person}></Persons>
     )
     render() {
          return (
               <div>
                    {this.personList}
               </div>
          )
     }
}

export default ListRendering
