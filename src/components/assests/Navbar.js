import React from 'react';
import {Switch,Link,Route} from 'react-router-dom'
import About from '../pages/About';
import Contact from '../pages/Contact';
import "./navbar.css";


function Navbar() {
     return (
          <div>

               <nav>

                    <div className="brand">
                              <h5>Mani</h5>
                    </div>

                    <div className="navbar-nav">
                              <ul>
                                   <li>
                                             <Link to="/home">Home</Link>
                                   </li>
                                   <li>
                                             <Link to="/about">about us</Link>
                                   </li>
                                   <li>
                                             <Link to="/contact">contact us</Link>
                                   </li>
                              </ul>
                    </div>
               </nav>


                <Route path="/" component />  
               <Route path="/about" component={About} />
               <Route path="/contact" component={Contact} />



          </div>
     )
}

export default Navbar
