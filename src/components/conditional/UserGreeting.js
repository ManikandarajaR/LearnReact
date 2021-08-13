import React, { Component } from 'react'

export class UserGreeting extends Component {

     constructor(props)
     {
          super(props);

          this.state = {
               isLoggedIn : false
          }
     }
     
     render() {

          let message;

          if(this.state.isLoggedIn)
          {
               message = <div>Welcome Manikandaraja</div>
                    
          }
          else
          {
                message = <div>Welcome Guest</div>
          }
          
          return (
               <div>{message}</div>
          )
          
     }
}

export default UserGreeting

/*
  if(this.state.isLoggedIn)
          {
               return(                    
                         <div>
                              <h1>Welcome Manikandaraja</h1>
                         </div>
               )
          }
          else
          { 
               return(                    
                    <div>
                         <h1>Welcome Guest</h1>
                    </div>
          )
          }
          */