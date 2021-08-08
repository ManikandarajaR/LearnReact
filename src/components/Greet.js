import React from 'react'

 const Greet = (props) => {
      console.log(props);
     return (
          <div>
                    <h5>Hello {props.name} - {props.work}</h5>
          </div>
     )
}
export default Greet;
