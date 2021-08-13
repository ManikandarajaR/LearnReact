import React from 'react'

function ChildComponent(props) {
     return (
          <div>
                    <button onClick={() => props.handlerName('I am your child..')}>Greeet Parent</button>
          </div>
     )
}

export default ChildComponent
